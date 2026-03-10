"use client";

interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  return (
    <div
      className="overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(214,171,84,0.08)",
        borderBottom: "1px solid rgba(214,171,84,0.08)",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="text-gold font-sans text-[12px] uppercase tracking-[4px] font-light"
            style={{ marginRight: 100 }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
