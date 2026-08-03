export default function BackgroundLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F5F5 1px, transparent 1px), linear-gradient(to bottom, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="absolute left-[8%] top-0 h-[560px] w-[560px] rounded-full opacity-25 blur-[110px]"
        style={{ backgroundColor: "#FF8A3D" }}
      />

      <div
        className="absolute right-[6%] top-[62%] h-[560px] w-[560px] rounded-full opacity-25 blur-[110px]"
        style={{ backgroundColor: "#3DC9FF" }}
      />
    </div>
  );
}
