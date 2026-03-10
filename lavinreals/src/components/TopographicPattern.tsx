"use client";

interface TopographicPatternProps {
  opacity?: number;
  color?: string;
}

export default function TopographicPattern({
  opacity = 0.03,
  color = "#ccbaad",
}: TopographicPatternProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <pattern
            id="topo-lines"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Contour lines - organic curves suggesting terrain */}
            <path
              d="M0,80 Q50,60 100,80 T200,80"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M0,100 Q40,85 80,95 T160,90 T200,100"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
            />
            <path
              d="M0,120 Q60,110 120,125 T200,120"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M0,50 Q30,40 70,55 T140,45 T200,50"
              fill="none"
              stroke={color}
              strokeWidth="0.6"
            />
            <path
              d="M0,150 Q50,140 100,155 T200,150"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
            />
            <path
              d="M0,30 Q45,20 90,35 T180,25 T200,30"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
            <path
              d="M0,170 Q35,162 70,170 T140,165 T200,170"
              fill="none"
              stroke={color}
              strokeWidth="0.7"
            />
            {/* Closed contour - suggests a hilltop */}
            <ellipse
              cx="100"
              cy="100"
              rx="35"
              ry="20"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              transform="rotate(-15 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="22"
              ry="12"
              fill="none"
              stroke={color}
              strokeWidth="0.4"
              transform="rotate(-15 100 100)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-lines)" />
      </svg>
    </div>
  );
}
