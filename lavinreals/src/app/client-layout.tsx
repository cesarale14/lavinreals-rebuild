"use client";
import { useState } from "react";
import { LanguageContext } from "@/hooks/useLanguage";
import type { Language } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LanguageContext.Provider>
  );
}
