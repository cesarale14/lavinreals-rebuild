"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Lock,
  Handshake,
  Building2,
  Globe,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Marquee from "@/components/Marquee";
import ParcelaCard from "@/components/ParcelaCard";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { parcelas, TOTAL_EDIF, TOTAL_VIV, TOTAL_PARCELAS } from "@/lib/parcelas";
import { CONTACT } from "@/lib/constants";

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

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang];
  const featured = parcelas.slice(0, 4);

  const madridCount = parcelas.filter((p) => p.city === "Madrid").length;
  const otrasCount = parcelas.filter((p) => p.city === "Otras Areas").length;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("x5-playsinline", "");
      video.setAttribute("x5-video-player-type", "h5");
      video.setAttribute("x5-video-player-fullscreen", "false");
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    };
    window.addEventListener("touchstart", playVideo, { once: true });
    window.addEventListener("scroll", playVideo, { once: true });
    return () => {
      window.removeEventListener("touchstart", playVideo);
      window.removeEventListener("scroll", playVideo);
    };
  }, []);

  return (
    <>
      {/* ── HERO (video background) ──────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle gold radial glow at center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(214,171,84,0.03)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 text-center pt-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="inline-block text-gold text-[13px] font-sans border border-gold/20 bg-gold/10 px-4 py-1.5 rounded-full mb-8"
          >
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-white leading-[1.15] max-w-4xl mx-auto mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-beige text-lg md:text-xl tracking-[2px] mb-12"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
          >
            <Link
              href="/cartera"
              className="bg-gold text-black px-8 py-3.5 rounded-md text-sm font-sans font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300 min-h-[48px] flex items-center justify-center"
            >
              {t.hero.btn1}
            </Link>
            <Link
              href="/contacto"
              className="border border-gold text-gold px-8 py-3.5 rounded-md text-sm font-sans font-semibold tracking-wide hover:bg-gold/10 transition-colors duration-300 min-h-[48px] flex items-center justify-center"
            >
              {t.hero.btn2}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pb-20"
          >
            <div className="text-center">
              <div className="text-4xl md:text-[40px] font-sans font-bold text-gold">
                <AnimatedCounter end={TOTAL_EDIF} suffix=" m2" />
              </div>
              <p className="text-beige/80 text-[13px] mt-2 font-sans">{t.hero.stat1Label}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-[40px] font-sans font-bold text-gold">
                <AnimatedCounter end={TOTAL_VIV} suffix="+" />
              </div>
              <p className="text-beige/80 text-[13px] mt-2 font-sans">{t.hero.stat2Label}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-[40px] font-sans font-bold text-gold">
                <AnimatedCounter end={TOTAL_PARCELAS} suffix="+" />
              </div>
              <p className="text-beige/80 text-[13px] mt-2 font-sans">{t.hero.stat3Label}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS (white) ────────────────────────── */}
      <section className="bg-white py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.benefits.title} subtitle={t.benefits.desc} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: BarChart3, title: t.benefits.b1t, desc: t.benefits.b1d },
              { icon: Lock, title: t.benefits.b2t, desc: t.benefits.b2d },
              { icon: Handshake, title: t.benefits.b3t, desc: t.benefits.b3d },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-surface-border rounded-xl p-8 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] group"
              >
                <div className="w-14 h-14 rounded-full bg-gold/[0.06] flex items-center justify-center mb-6">
                  <card.icon size={32} strokeWidth={1.5} className="text-gold group-hover:text-gold-dark transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-heading mb-3 leading-[1.15]">{card.title}</h3>
                <p className="font-sans text-body text-[15px] leading-[1.7]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────── */}
      <Marquee text={t.marquee1} />
      <Marquee text={t.marquee2} />

      {/* ── FEATURED PARCELAS (white) ──────────────── */}
      <section className="bg-white py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.portfolio.title} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featured.map((p, i) => (
              <motion.div
                key={p.name}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ParcelaCard parcela={p} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/cartera"
              className="border border-gold text-gold px-8 py-3 rounded-md text-sm font-sans font-semibold hover:bg-gold hover:text-black transition-all duration-300 min-h-[44px] inline-flex items-center"
            >
              {t.portfolio.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* ── REGIONS (light beige tint) ──────────────── */}
      <section className="bg-warm py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.regions.title} subtitle={t.regions.desc} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mt-10">
            {[
              { icon: Building2, name: t.regions.madrid, count: madridCount },
              { icon: Globe, name: t.regions.otras, count: otrasCount },
            ].map((region, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href="/cartera"
                  className="block bg-white border border-surface-border rounded-xl p-8 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/[0.06] flex items-center justify-center mb-5">
                    <region.icon size={40} strokeWidth={1.5} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-heading mb-1 leading-[1.15]">{region.name}</h3>
                  <p className="text-body text-[15px] font-sans">
                    {region.count} {t.regions.listings}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SELL / INVEST (white) ──────────────── */}
      <section className="bg-white py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.whySell.title} subtitle={t.whySell.desc} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Globe, title: t.whySell.p1t, desc: t.whySell.p1d },
              { icon: TrendingUp, title: t.whySell.p2t, desc: t.whySell.p2d },
              { icon: ShieldCheck, title: t.whySell.p3t, desc: t.whySell.p3d },
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

          {/* Gold CTA box */}
          <motion.div {...fadeIn} className="mt-14 border border-gold/30 rounded-xl p-8 md:p-12 bg-gold/[0.03]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
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
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-gold text-black px-8 py-3.5 rounded-md text-sm font-sans font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
                >
                  {t.whySell.btnConsulta}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OBSERVATORIO (dark) ─────────────────────── */}
      <section className="bg-black py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading light title={t.observatorio.title} subtitle={t.observatorio.desc} />
          </motion.div>

          <motion.div
            {...fadeIn}
            className="bg-dark-raised border border-dark-border rounded-xl p-8 md:p-12 mt-10"
          >
            <h3 className="font-serif text-xl text-white mb-4 leading-[1.15]">{t.observatorio.info}</h3>
            <p className="font-sans text-beige text-[15px] leading-[1.7] mb-8">
              {t.observatorio.infoDesc}
            </p>
            <Link
              href="/noticias"
              className="text-gold font-sans text-sm font-medium hover:text-gold-light transition-colors duration-300"
            >
              {t.observatorio.btn} →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT + FORM (white) ──────────────────── */}
      <section className="bg-white py-24 md:py-28 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.contactSection.title} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {/* Info */}
            <motion.div {...fadeIn} className="space-y-6">
              <div className="bg-warm border border-surface-border rounded-xl p-7">
                <h4 className="text-gold font-serif text-lg mb-3">{t.contactSection.office}</h4>
                <p className="text-body font-sans text-[15px] leading-[1.7]">{t.contactSection.officeAddr}</p>
                <p className="text-muted font-sans text-[13px] mt-2">{t.contactSection.consultaPresencial}</p>
              </div>
              <div className="bg-warm border border-surface-border rounded-xl p-7">
                <p className="text-body font-sans text-[15px]">{t.contactSection.consultasConf}</p>
                <a
                  href={`tel:${CONTACT.mainPhone.replace(/\s/g, "")}`}
                  className="text-gold font-sans text-lg font-semibold block mt-3 hover:text-gold-dark transition-colors duration-300"
                >
                  {CONTACT.mainPhone}
                </a>
              </div>
              <div className="bg-warm border border-surface-border rounded-xl p-7">
                <a
                  href={`mailto:${CONTACT.pablo.email}`}
                  className="text-gold font-sans text-sm font-medium hover:text-gold-dark transition-colors duration-300"
                >
                  {CONTACT.pablo.email}
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
