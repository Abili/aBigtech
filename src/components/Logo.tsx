interface LogoProps {
  size?: number;
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="aBig Tech"
      width={size}
      height={size}
      style={{
        objectFit: 'contain'
      }}
    />
  );
}
