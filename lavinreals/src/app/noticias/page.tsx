"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import TopographicPattern from "@/components/TopographicPattern";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { CONTACT } from "@/lib/constants";
import { fallbackNews } from "@/lib/fallback-news";
import type { NewsArticle } from "@/types";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function NoticiasPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles && data.articles.length > 0 ? data.articles : fallbackNews);
      })
      .catch(() => {
        setArticles(fallbackNews);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="px-5 md:px-10 py-16 md:py-20 relative overflow-hidden">
        <TopographicPattern />
        <div className="max-w-[1200px] mx-auto relative">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-2 h-2 rounded-full bg-red-500"
                style={{ animation: "pulse-dot 2s infinite" }}
              />
              <span className="text-red-500 text-[13px] font-sans font-semibold tracking-wide">
                {t.newsPage.liveLabel}
              </span>
            </div>
            <SectionHeading title={t.newsPage.title} subtitle={t.newsPage.sub} />
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="px-5 md:px-10 pb-20 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.h3
            {...fadeIn}
            className="font-serif text-heading mb-10 leading-[1.15]"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            {t.newsPage.recent}
          </motion.h3>

          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
              <span className="text-body font-sans text-[15px] ml-4">{t.newsPage.loading}</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4) }}
                >
                  <NewsCard article={article} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 md:px-10 pb-24 md:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <div className="border border-gold/30 rounded-xl p-8 md:p-12 bg-gold/[0.03] text-center">
              <h3
                className="font-serif text-heading mb-3 leading-[1.15]"
                style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
              >
                {t.newsPage.ctaTitle}
              </h3>
              <p className="font-sans text-body text-[15px] mb-8">{t.newsPage.ctaSub}</p>
              <a
                href={`tel:${CONTACT.mainPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-gold text-black px-8 py-3.5 rounded-md text-sm font-sans font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
              >
                <Phone size={18} strokeWidth={1.5} />
                {CONTACT.mainPhone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
