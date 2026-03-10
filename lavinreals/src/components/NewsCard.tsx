"use client";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import type { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="bg-white border border-surface-border rounded-xl p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-l-gold hover:border-l-[3px]">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-[11px] font-sans font-semibold">
          {article.source}
        </span>
        <span className="text-muted text-[12px] font-sans">
          {new Date(article.date).toLocaleDateString(lang === "es" ? "es-ES" : lang === "fr" ? "fr-FR" : "en-GB")}
        </span>
      </div>
      <h3 className="font-serif text-lg text-heading mb-3 leading-[1.3]">
        {article.title}
      </h3>
      <p className="text-body font-sans text-[15px] leading-[1.7] mb-5">
        {article.summary}
      </p>
      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gold text-sm font-sans font-medium hover:text-gold-dark transition-colors duration-300"
        >
          {t.newsPage.readMore}
          <ExternalLink size={14} strokeWidth={1.5} />
        </a>
      )}
    </div>
  );
}
