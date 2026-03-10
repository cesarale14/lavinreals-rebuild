"use client";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as "es" | "en" | "fr")}
      className="bg-transparent border border-gold/30 text-gold px-3 py-1.5 rounded text-xs font-sans cursor-pointer outline-none"
    >
      <option value="es" className="bg-white text-heading">ES</option>
      <option value="en" className="bg-white text-heading">EN</option>
      <option value="fr" className="bg-white text-heading">FR</option>
    </select>
  );
}
