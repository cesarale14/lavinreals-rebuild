interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <div className="w-12 h-0.5 bg-gold mb-6" />
      <h2
        className={`font-serif leading-[1.15] mb-4 ${light ? "text-white" : "text-heading"}`}
        style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-[15px] leading-[1.7] max-w-2xl ${light ? "text-beige" : "text-body"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
