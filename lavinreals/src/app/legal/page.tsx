"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import TopographicPattern from "@/components/TopographicPattern";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const sections = [
  {
    title: "Condiciones de uso",
    body: "El acceso y navegación por la página web de LAVIN REALS, S.L.U. (en adelante, \"LAVIN REALS\") implica la aceptación plena de las presentes condiciones de uso. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios, a no emplearlos con fines ilícitos o contrarios a la buena fe y a no provocar daños en los sistemas de LAVIN REALS o de terceros. La información ofrecida en este sitio tiene carácter meramente informativo y en ningún caso supone una oferta vinculante ni asesoramiento profesional inmobiliario.",
  },
  {
    title: "Política de cookies",
    body: "La web de LAVIN REALS utiliza cookies propias y de terceros con la finalidad de permitir el funcionamiento del sitio, realizar estadísticas de uso y, en su caso, mejorar la experiencia de navegación del usuario. Al continuar navegando, el usuario acepta la instalación de dichas cookies, salvo que haya modificado la configuración de su navegador para bloquearlas. El usuario puede obtener información detallada sobre las cookies utilizadas, su finalidad y la forma de desactivarlas en la Política de Cookies disponible en esta web.",
  },
  {
    title: "Política de privacidad",
    body: "De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa de que los datos personales facilitados a través de esta web serán tratados por LAVIN REALS, S.L.U., con domicilio en C/ Mistral 2, 28223 Pozuelo de Alarcón (Madrid) y correo de contacto pablo@lavinreals.es, con la finalidad de gestionar las consultas recibidas, la relación comercial derivada de los servicios inmobiliarios y, en su caso, el envío de comunicaciones informativas relacionadas, cuando el usuario lo haya autorizado. El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad mediante escrito dirigido a dicha dirección o a la dirección de correo electrónico indicada.",
  },
  {
    title: "Aviso legal",
    body: "La presente web es titularidad de LAVIN REALS, S.L.U., sociedad de nacionalidad española inscrita en el Registro Mercantil de Madrid, tomo 46.824, folio 90, inscripción 1.ª, hoja M-821965, constituida mediante escritura número 2024/1312 otorgada ante el notario de Madrid D. Eusebio Javier González Lasso de la Vega, con domicilio social en C/ Mistral 2, 28223 Pozuelo de Alarcón (Madrid) y NIF B16449241. El acceso al sitio web y el uso de sus contenidos se rigen por el ordenamiento jurídico español y por lo dispuesto en este Aviso Legal y las restantes políticas publicadas en la página.",
  },
];

export default function LegalPage() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="px-5 md:px-10 py-16 md:py-20 relative overflow-hidden">
        <TopographicPattern />
        <div className="max-w-[800px] mx-auto relative">
          <motion.div {...fadeIn}>
            <SectionHeading title="Legal" />
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-5 md:px-10 pb-24 md:pb-28">
        <div className="max-w-[800px] mx-auto space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h2 className="font-serif text-xl text-gold mb-4 leading-[1.15]">
                {section.title}
              </h2>
              <p className="font-sans text-body text-[15px] leading-[1.8]">
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
