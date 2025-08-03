export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 108 108"
      style={{ display: "block" }}
    >
      {/* Red circular background */}
      <circle
        cx="54"
        cy="54"
        r="50"
        fill="#E50914"
      />
      
      {/* White letter E */}
      <path
        d="M30,25 L75,25 L75,35 L45,35 L45,45 L70,45 L70,55 L45,55 L45,65 L75,65 L75,75 L30,75 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
