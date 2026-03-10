"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-surface-border rounded-xl p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <Check size={32} strokeWidth={2} className="text-gold" />
        </div>
        <p className="text-heading font-serif text-xl">{t.form.success}</p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-warm border border-surface-border text-heading px-4 py-3.5 rounded-lg font-sans text-[15px] outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_rgba(214,171,84,0.1)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-surface-border rounded-xl p-8 md:p-10"
    >
      <h3 className="font-serif text-2xl text-heading mb-8 leading-[1.15]">{t.form.title}</h3>

      <div className="space-y-5">
        <div>
          <label className="block text-body text-[13px] font-sans mb-2">{t.form.name}</label>
          <input type="text" required className={inputClasses} />
        </div>
        <div>
          <label className="block text-body text-[13px] font-sans mb-2">{t.form.email}</label>
          <input type="email" required className={inputClasses} />
        </div>
        <div>
          <label className="block text-body text-[13px] font-sans mb-2">{t.form.phone}</label>
          <input type="tel" className={inputClasses} />
        </div>
        <div>
          <label className="block text-body text-[13px] font-sans mb-2">{t.form.reason}</label>
          <select required className={inputClasses}>
            <option value="">--</option>
            {t.form.reasons.map((reason: string) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-body text-[13px] font-sans mb-2">{t.form.message}</label>
          <textarea rows={4} className={`${inputClasses} resize-none`} />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gold to-gold-dark text-black py-3.5 rounded-lg text-sm font-sans font-bold tracking-wide hover:from-gold-light hover:to-gold transition-all duration-300 min-h-[48px]"
        >
          {t.form.submit}
        </button>
      </div>
    </form>
  );
}
