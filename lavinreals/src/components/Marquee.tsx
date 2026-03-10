"use client";

interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  return (
    <div className="overflow-hidden py-3.5" style={{ background: "rgba(204,186,173,0.08)", borderTop: "1px solid rgba(214,171,84,0.2)", borderBottom: "1px solid rgba(214,171,84,0.2)" }}>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 25s linear infinite" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-gold font-sans text-sm tracking-[3px] font-light mr-20"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
