import { PawPrint } from "lucide-react";

// Valores fijos (no aleatorios) para evitar diferencias de hidratación.
const PAWS = [
  { left: "8%", size: 20, duration: 48, delay: -6, color: "#FF8A3D" },
  { left: "24%", size: 16, duration: 58, delay: -30, color: "#3DC9FF" },
  { left: "42%", size: 22, duration: 52, delay: -16, color: "#FF8A3D" },
  { left: "61%", size: 16, duration: 62, delay: -40, color: "#3DC9FF" },
  { left: "78%", size: 20, duration: 50, delay: -22, color: "#FF8A3D" },
  { left: "92%", size: 16, duration: 56, delay: -9, color: "#3DC9FF" },
];

export default function BackgroundLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grilla que se desvanece hacia los bordes */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F5F5 1px, transparent 1px), linear-gradient(to bottom, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, #000 30%, transparent 100%)",
        }}
      />

      {/* Luces que se desplazan lentamente */}
      <div
        className="petlink-drift-a absolute -left-[10%] -top-[10%] h-[560px] w-[560px] rounded-full opacity-40 blur-[110px]"
        style={{ backgroundColor: "#FF8A3D" }}
      />
      <div
        className="petlink-drift-b absolute -right-[10%] top-[35%] h-[560px] w-[560px] rounded-full opacity-30 blur-[110px]"
        style={{ backgroundColor: "#3DC9FF" }}
      />
      <div
        className="petlink-drift-c absolute bottom-[-15%] left-[20%] h-[480px] w-[480px] rounded-full opacity-[0.2] blur-[120px]"
        style={{ backgroundColor: "#4ADE80" }}
      />

      {/* Huellas sutiles que suben muy despacio */}
      {PAWS.map((p, i) => (
        <PawPrint
          key={i}
          size={p.size}
          strokeWidth={1.5}
          className="petlink-paw absolute bottom-0"
          style={{
            left: p.left,
            color: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
