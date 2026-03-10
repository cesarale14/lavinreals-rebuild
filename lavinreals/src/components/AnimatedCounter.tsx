"use client";
import { useOnScreen } from "@/hooks/useOnScreen";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2200,
}: AnimatedCounterProps) {
  const [ref, visible] = useOnScreen(0.3);
  const val = useCountUp(end, duration, visible);

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className="font-sans font-bold text-gold tabular-nums"
    >
      {val.toLocaleString("es-ES")}
      {suffix}
    </span>
  );
}
