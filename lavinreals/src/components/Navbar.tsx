"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/cartera", label: t.nav.cartera },
    { href: "/contacto", label: t.nav.contacto },
    { href: "/acerca", label: t.nav.acerca },
    { href: "/noticias", label: t.nav.noticias },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-surface-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[72px] px-5 md:px-10">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Logo size={80} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-[13px] font-medium tracking-wide transition-colors duration-300 pb-1 ${
                isActive(link.href)
                  ? "text-gold border-b-2 border-gold"
                  : "text-heading border-b-2 border-transparent hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href="tel:+34605237593"
            className="text-gold text-[13px] font-sans font-semibold transition-colors duration-300 hover:text-gold-dark"
          >
            {t.nav.phone}
          </a>
          <Link
            href="/contacto"
            className="bg-gold text-black px-5 py-2.5 rounded-md text-[13px] font-sans font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-heading p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-surface-border overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-sans text-base py-3 px-2 rounded-lg transition-colors duration-300 min-h-[44px] flex items-center ${
                    isActive(link.href) ? "text-gold bg-gold/[0.05]" : "text-heading hover:text-gold hover:bg-gold/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="bg-gold text-black px-5 py-3.5 rounded-md text-sm font-sans font-semibold text-center mt-3 min-h-[44px] flex items-center justify-center hover:bg-gold-light transition-colors duration-300"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
