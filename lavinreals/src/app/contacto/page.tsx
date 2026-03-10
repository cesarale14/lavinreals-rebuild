"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CalendarCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import TopographicPattern from "@/components/TopographicPattern";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { faqs } from "@/lib/faqs";
import { CONTACT } from "@/lib/constants";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ContactoPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="px-5 md:px-10 py-16 md:py-20 relative overflow-hidden">
        <TopographicPattern />
        <div className="max-w-[1200px] mx-auto relative">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.contactPage.title} subtitle={t.contactPage.desc} />
            <span className="inline-block bg-gold/10 border border-gold/20 text-gold text-[13px] font-sans px-4 py-2 rounded-full mt-2">
              {t.contactPage.respuesta}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="px-5 md:px-10 pb-20 md:pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <motion.div {...fadeIn} className="bg-white border border-surface-border rounded-xl p-8 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <div className="w-14 h-14 rounded-full bg-gold/[0.06] flex items-center justify-center mb-6">
              <MapPin size={28} strokeWidth={1.5} className="text-gold" />
            </div>
            <h3 className="font-serif text-xl text-heading mb-3 leading-[1.15]">{t.contactPage.dir}</h3>
            <p className="font-sans text-body text-[15px] leading-[1.7]">{t.contactPage.dirVal}</p>
            <p className="font-sans text-muted text-[13px] mt-2">{t.contactPage.horario}</p>
            <p className="font-sans text-muted text-[12px] mt-1">{t.contactPage.citaPrevia}</p>
            <a
              href={`tel:${CONTACT.mainPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 mt-5 text-gold text-sm font-sans font-medium hover:text-gold-dark transition-colors duration-300 min-h-[44px]"
            >
              <CalendarCheck size={16} strokeWidth={1.5} />
              {t.contactPage.agendaCita}
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white border border-surface-border rounded-xl p-8 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <div className="w-14 h-14 rounded-full bg-gold/[0.06] flex items-center justify-center mb-6">
              <Phone size={28} strokeWidth={1.5} className="text-gold" />
            </div>
            <h3 className="font-serif text-xl text-heading mb-3 leading-[1.15]">{t.contactPage.llamanos}</h3>
            <a
              href={`tel:${CONTACT.pablo.phone.replace(/[\s()-]/g, "")}`}
              className="text-gold font-sans text-lg font-semibold block hover:text-gold-dark transition-colors duration-300"
            >
              {CONTACT.pablo.phone}
            </a>
            <a
              href={`tel:${CONTACT.mainPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center mt-5 bg-gold text-black px-6 py-2.5 rounded-md text-sm font-sans font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[44px]"
            >
              {t.contactPage.llamaAhora}
            </a>
          </motion.div>

          {/* Email */}
          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white border border-surface-border rounded-xl p-8 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <div className="w-14 h-14 rounded-full bg-gold/[0.06] flex items-center justify-center mb-6">
              <Mail size={28} strokeWidth={1.5} className="text-gold" />
            </div>
            <h3 className="font-serif text-xl text-heading mb-3 leading-[1.15]">{t.contactPage.correo}</h3>
            <a href={`mailto:${CONTACT.pablo.email}`} className="text-gold font-sans text-[15px] block hover:text-gold-dark transition-colors duration-300">
              {CONTACT.pablo.email}
            </a>
            <a href={`mailto:${CONTACT.luis.email}`} className="text-gold font-sans text-[15px] block mt-1.5 hover:text-gold-dark transition-colors duration-300">
              {CONTACT.luis.email}
            </a>
            <p className="text-muted text-[12px] font-sans mt-3">{t.contactPage.correoResp}</p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-warm py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.contactPage.expTitle} />
            <p className="font-sans text-body text-[15px] leading-[1.7] max-w-3xl mb-8">
              {t.contactPage.expDesc}
            </p>
            <blockquote className="border-l-2 border-gold pl-6 my-8">
              <p className="font-serif text-heading text-lg italic leading-[1.5]">
                &ldquo;{t.contactPage.expQuote}&rdquo;
              </p>
              <p className="font-sans text-muted text-[13px] mt-3">{t.contactPage.expQuoteBy}</p>
            </blockquote>
            <div className="bg-gold/10 border border-gold/20 rounded-full px-5 py-2 inline-block mt-4">
              <span className="text-gold text-[13px] font-sans">{t.contactPage.idiomas}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-5 md:px-10 py-20 md:py-24">
        <div className="max-w-[600px] mx-auto">
          <motion.div {...fadeIn}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-10 pb-24 md:pb-28">
        <div className="max-w-[800px] mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeading title={t.contactPage.faqTitle} subtitle={t.contactPage.faqSub} />
            <FaqAccordion faqs={faqs[lang]} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
