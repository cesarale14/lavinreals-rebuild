"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-black border-t border-gold/10 pt-20 pb-10 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Logo size={48} inverted />
          <p className="text-beige-dark text-[15px] leading-[1.7] mt-5 font-sans">
            {t.footer.desc}
          </p>
          <a
            href="tel:+34605237593"
            className="text-gold text-sm font-sans font-semibold block mt-4 hover:text-gold-light transition-colors duration-300"
          >
            {t.nav.phone}
          </a>
          <p className="text-beige-dark/70 text-sm mt-2 font-sans leading-relaxed">
            C/Gobelas, 35, El Plantío, 28023 Madrid - HQ La Florida
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-gold font-serif text-base mb-5">{t.footer.menu}</h4>
          {[
            { href: "/cartera", label: t.nav.cartera },
            { href: "/contacto", label: t.nav.contacto },
            { href: "/acerca", label: t.nav.acerca },
            { href: "/noticias", label: t.nav.noticias },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-beige-light text-sm font-sans py-2 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-gold font-serif text-base mb-5">{t.footer.hablemos}</h4>
          <p className="text-beige-dark text-[15px] leading-[1.7] font-sans mb-5">
            {t.footer.hablemosDesc}
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-gold text-black px-7 py-3 rounded-md text-sm font-sans font-semibold hover:bg-gold-light transition-colors duration-300"
          >
            {t.footer.consultar}
          </Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
        <div>
          <p className="text-beige-dark/60 text-xs font-sans">{t.footer.copy}</p>
          <p className="text-beige-dark/60 text-[11px] font-sans mt-1">
            {t.footer.copy2}
          </p>
        </div>
        <Link href="/legal" className="text-beige-dark/60 text-xs font-sans hover:text-gold transition-colors duration-300">{t.footer.legal}</Link>
      </div>
    </footer>
  );
}
