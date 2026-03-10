interface LogoProps {
  size?: number;
  inverted?: boolean;
}

export default function Logo({ size = 48, inverted = false }: LogoProps) {
  return (
    <img
      src="/logo.jpeg"
      alt="Lavin Reals"
      width={size}
      height={size}
      style={{
        height: size,
        width: "auto",
        filter: inverted ? "invert(1)" : "none",
      }}
    />
  );
}
