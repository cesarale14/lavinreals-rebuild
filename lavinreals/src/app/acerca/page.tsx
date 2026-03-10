"use client";
import { motion } from "framer-motion";
import { Globe, Building, Lock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import TopographicPattern from "@/components/TopographicPattern";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { TOTAL_EDIF, TOTAL_VIV, TOTAL_PARCELAS } from "@/lib/parcelas";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AcercaPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="px-5 md:px-10 py-16 md:py-20 relative overflow-hidden">
        <TopographicPattern />
        <div className="max-w-[1200px] mx-auto relative">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.aboutPage.title} />
            <span className="text-gold font-sans text-[13px] font-medium">{t.aboutPage.mision}</span>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 md:px-10 pb-20 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <motion.div {...fadeIn}>
            <h2
              className="font-serif text-heading mb-6 leading-[1.15]"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            >
              {t.aboutPage.mision}
            </h2>
            <p className="font-sans text-muted text-[13px] mb-5">{t.aboutPage.misionDesc}</p>
            <div className="font-sans text-body text-[15px] leading-[1.7] whitespace-pre-line">
              {t.aboutPage.misionText}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision (dark accent section) */}
      <section className="bg-black py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <motion.div {...fadeIn}>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <h2
              className="font-serif text-white mb-6 leading-[1.15]"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            >
              {t.aboutPage.vision}
            </h2>
            <div className="font-sans text-beige text-[15px] leading-[1.7] whitespace-pre-line">
              {t.aboutPage.visionText}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Excellence / Quote */}
      <section className="px-5 md:px-10 py-20 md:py-24">
        <div className="max-w-[900px] mx-auto">
          <motion.div {...fadeIn}>
            <blockquote className="border-l-2 border-gold pl-6 my-8">
              <p className="font-serif text-heading text-xl italic leading-[1.4]">
                &ldquo;{t.aboutPage.quote}&rdquo;
              </p>
              <p className="font-sans text-muted text-[13px] mt-3">{t.aboutPage.quoteBy}</p>
            </blockquote>
            <p className="font-sans text-body text-[15px] leading-[1.7] mt-8">
              {t.aboutPage.connectDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-warm py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.aboutPage.whyTitle} subtitle={t.aboutPage.whySub} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Globe, title: t.aboutPage.p1t, desc: t.aboutPage.p1d },
              { icon: Building, title: t.aboutPage.p2t, desc: t.aboutPage.p2d },
              { icon: Lock, title: t.aboutPage.p3t, desc: t.aboutPage.p3d },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-surface-border rounded-xl p-8 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              >
                <div className="w-14 h-14 rounded-full bg-gold/[0.06] flex items-center justify-center mb-6">
                  <card.icon size={32} strokeWidth={1.5} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl text-heading mb-3 leading-[1.15]">{card.title}</h3>
                <p className="font-sans text-body text-[15px] leading-[1.7]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-5 md:px-10 py-24 md:py-28">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <div className="border border-gold/30 rounded-xl p-8 md:p-12 bg-gold/[0.03]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-sans font-bold text-gold">
                    <AnimatedCounter end={TOTAL_EDIF} suffix=" m2" />
                  </div>
                  <p className="text-body text-[13px] mt-2 font-sans">{t.whySell.stat1}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-sans font-bold text-gold">
                    <AnimatedCounter end={TOTAL_VIV} suffix="+" />
                  </div>
                  <p className="text-body text-[13px] mt-2 font-sans">{t.whySell.stat2}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-sans font-bold text-gold">
                    <AnimatedCounter end={TOTAL_PARCELAS} suffix="+" />
                  </div>
                  <p className="text-body text-[13px] mt-2 font-sans">{t.hero.stat3Label}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
