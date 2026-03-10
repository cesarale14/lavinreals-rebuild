"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ParcelaCard from "@/components/ParcelaCard";
import SectionHeading from "@/components/SectionHeading";
import TopographicPattern from "@/components/TopographicPattern";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { parcelas } from "@/lib/parcelas";
import { CONTACT } from "@/lib/constants";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function CarteraPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [city, setCity] = useState<string>("all");
  const [area, setArea] = useState<string>("all");

  const filteredParcelas = useMemo(() => {
    let result = parcelas;
    if (city !== "all") result = result.filter((p) => p.city === city);
    if (area !== "all") result = result.filter((p) => p.name === area);
    return result;
  }, [city, area]);

  const areas = useMemo(() => {
    let source = parcelas;
    if (city !== "all") source = source.filter((p) => p.city === city);
    return [...new Set(source.map((p) => p.name))];
  }, [city]);

  const selectClasses =
    "bg-warm border border-surface-border text-heading px-4 py-3.5 rounded-lg font-sans text-[15px] outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_rgba(214,171,84,0.1)] min-h-[44px]";

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="px-5 md:px-10 py-16 md:py-20 relative overflow-hidden">
        <TopographicPattern />
        <div className="max-w-[1200px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title={t.carteraPage.title} subtitle={t.carteraPage.desc} />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setArea("all");
              }}
              className={selectClasses}
            >
              <option value="all">{t.carteraPage.filterCity}</option>
              <option value="Madrid">Madrid</option>
              <option value="Otras Areas">{t.regions.otras}</option>
            </select>

            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className={selectClasses}
            >
              <option value="all">{t.carteraPage.allAreas}</option>
              {areas.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 md:px-10 pb-20 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParcelas.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.3) }}
              >
                <ParcelaCard parcela={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 md:px-10 pb-24 md:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <div className="border border-gold/30 rounded-xl p-8 md:p-12 bg-gold/[0.03] text-center">
              <p className="font-serif text-xl text-heading mb-3 leading-[1.15]">{t.carteraPage.notFound}</p>
              <p className="font-sans text-body text-[15px] mb-6">{t.carteraPage.notFoundCta}</p>
              <a
                href={`tel:${CONTACT.mainPhone.replace(/\s/g, "")}`}
                className="text-gold font-sans text-lg font-semibold hover:text-gold-dark transition-colors duration-300"
              >
                {CONTACT.mainPhone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
