"use client";
import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import type { Parcela } from "@/lib/parcelas";

interface ParcelaCardProps {
  parcela: Parcela;
}

export default function ParcelaCard({ parcela }: ParcelaCardProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="bg-white border border-surface-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] group">
      {/* Header */}
      <div className="bg-gradient-to-br from-gold/[0.05] to-transparent px-8 pt-7 pb-5">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-serif text-lg text-heading leading-[1.15]">{parcela.name}</h3>
          <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-[11px] font-sans font-semibold whitespace-nowrap">
            {parcela.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 pt-5 pb-7">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <div className="text-muted text-[11px] font-sans tracking-wide mb-1.5">
              {t.portfolio.supDisp}
            </div>
            <div className="text-heading text-xl font-sans font-bold">
              <AnimatedCounter end={parcela.supDisp} />
              <span className="text-[13px] text-body ml-1">m2</span>
            </div>
          </div>
          <div>
            <div className="text-muted text-[11px] font-sans tracking-wide mb-1.5">
              {t.portfolio.supEdif}
            </div>
            <div className="text-heading text-xl font-sans font-bold">
              <AnimatedCounter end={parcela.supEdif} />
              <span className="text-[13px] text-body ml-1">m2</span>
            </div>
          </div>
        </div>

        {parcela.viv && (
          <div className="mb-5">
            <div className="text-muted text-[11px] font-sans tracking-wide mb-1.5">
              {t.portfolio.vivAut}
            </div>
            <div className="text-gold text-2xl font-sans font-extrabold">
              <AnimatedCounter end={parcela.viv} />
            </div>
          </div>
        )}

        <button className="w-full border border-gold text-gold py-2.5 rounded-md text-sm font-sans font-semibold transition-all duration-300 ease-out hover:bg-gold hover:text-black min-h-[44px]">
          {t.portfolio.details}
        </button>
      </div>
    </div>
  );
}
