import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";
import { RSS_SOURCES } from "@/lib/rss-sources";
import { fallbackNews } from "@/lib/fallback-news";
import type { NewsArticle } from "@/types";

interface CacheEntry {
  articles: NewsArticle[];
  timestamp: number;
}

let cache: CacheEntry | null = null;
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

async function fetchFeed(source: { name: string; url: string; category: string }): Promise<NewsArticle[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(source.url, {
      signal: controller.signal,
      headers: { "User-Agent": "LavinrealsBot/1.0" },
    });
    clearTimeout(timeout);

    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(xml);

    // Handle RSS 2.0
    const channel = parsed?.rss?.channel;
    if (channel?.item) {
      const items = Array.isArray(channel.item) ? channel.item : [channel.item];
      return items.slice(0, 5).map((item: Record<string, string>) => ({
        title: item.title || "",
        summary: (item.description || "").replace(/<[^>]*>/g, "").slice(0, 300),
        source: source.name,
        date: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
        url: item.link || null,
        category: source.category,
      }));
    }

    // Handle Atom
    const feed = parsed?.feed;
    if (feed?.entry) {
      const entries = Array.isArray(feed.entry) ? feed.entry : [feed.entry];
      return entries.slice(0, 5).map((entry: Record<string, unknown>) => ({
        title: (entry.title as string) || "",
        summary: ((entry.summary || entry.content) as string || "").replace(/<[^>]*>/g, "").slice(0, 300),
        source: source.name,
        date: (entry.updated || entry.published) ? new Date(entry.updated as string || entry.published as string).toISOString() : new Date().toISOString(),
        url: typeof entry.link === "object" && entry.link !== null ? (entry.link as Record<string, string>)["@_href"] || null : (entry.link as string) || null,
        category: source.category,
      }));
    }

    return [];
  } catch {
    return [];
  }
}

export async function GET() {
  // Check cache
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json({ articles: cache.articles });
  }

  const results = await Promise.all(RSS_SOURCES.map(fetchFeed));
  const articles = results
    .flat()
    .filter((a) => a.title)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  if (articles.length === 0) {
    return NextResponse.json({ articles: fallbackNews });
  }

  cache = { articles, timestamp: Date.now() };
  return NextResponse.json({ articles });
}
