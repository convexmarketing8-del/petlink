"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Part {
  label: string;
  /** Posición del punto sobre la imagen, en % (x, y) */
  x: number;
  y: number;
}

interface Device {
  name: string;
  tagline: string;
  accent: string;
  image: string;
  /** Tamaño real de la imagen ya recortada */
  width: number;
  height: number;
  /** Tamaño de la imagen original (en coordenadas de los puntos) y zona recortada */
  source: { w: number; h: number };
  crop: { l: number; t: number; w: number; h: number };
  parts: Part[];
}

const DEVICES: Device[] = [
  {
    name: "Alimentador",
    tagline: "Porciones exactas, cuando vos quieras.",
    accent: "#FF8A3D",
    image: "/images/alimentador.webp",
    width: 2431,
    height: 1365,
    source: { w: 2000, h: 1231 },
    crop: { l: 80, t: 160, w: 1870, h: 1050 },
    parts: [
      { label: "Tapa con cierre hermético", x: 53.9, y: 18.5 },
      { label: "Panel trasero con cierre de seguridad", x: 58.4, y: 22.1 },
      { label: "Sistema de control inteligente (ESP32 + Wi-Fi)", x: 35.6, y: 25.3 },
      { label: "Tolva de alimento", x: 46.3, y: 33.4 },
      { label: "Logotipo PETLINK", x: 39, y: 41.7 },
      { label: "Rotor dosificador", x: 51.5, y: 47 },
      { label: "Servomotor de alto torque", x: 49.5, y: 53.9 },
      { label: "Espacio para pantalla OLED", x: 37.5, y: 54.7 },
      { label: "Carcasa frontal", x: 34.4, y: 59.6 },
      { label: "Cámara de dosificación con rampa de salida", x: 48.9, y: 66.3 },
      { label: "Respaldo de energía (2 baterías 18650)", x: 50.9, y: 69.6 },
      { label: "Cuenco de acero inoxidable removible", x: 33, y: 73 },
      { label: "Placa base", x: 56.6, y: 75.5 },
      { label: "Bandeja base antideslizante", x: 44, y: 87.2 },
    ],
  },
  {
    name: "Bebedero",
    tagline: "Agua fresca, siempre disponible.",
    accent: "#3DC9FF",
    image: "/images/bebedero.webp",
    width: 2400,
    height: 1388,
    source: { w: 2000, h: 1360 },
    crop: { l: 40, t: 150, w: 1920, h: 1110 },
    parts: [
      { label: "Cascada con salida regulable", x: 53, y: 15.8 },
      { label: "Tapa con bandeja de bebida y rebosadero", x: 61.4, y: 29.2 },
      { label: "Tanque transparente de Tritan", x: 36.8, y: 55 },
      { label: "Bomba sumergible silenciosa", x: 59, y: 50.7 },
      { label: "Base con electrónica y sensor de nivel", x: 63.8, y: 70.4 },
      { label: "Logotipo PETLINK", x: 55.9, y: 74 },
    ],
  },
];

const CYCLE_MS = 2600;

/** Convierte la posición (en % de la imagen original) a % de la imagen recortada */
function place(device: Device, part: Part) {
  const { source, crop } = device;
  return {
    left: `${(((part.x / 100) * source.w - crop.l) / crop.w) * 100}%`,
    top: `${(((part.y / 100) * source.h - crop.t) / crop.h) * 100}%`,
  };
}

function DeviceCard({ device, delay }: { device: Device; delay: number }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);

  // Recorre las partes automáticamente (se frena al interactuar)
  useEffect(() => {
    if (paused || open) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % device.parts.length),
      CYCLE_MS,
    );
    return () => clearInterval(id);
  }, [paused, open, device.parts.length]);

  const part = device.parts[active];

  return (
    <Reveal delay={delay}>
      <article
        className="group relative overflow-hidden rounded-3xl border border-[#22262C] bg-[#161A1F] p-4 transition-colors duration-300 hover:border-[color:var(--accent)] sm:p-6"
        style={{ "--accent": device.accent } as CSSProperties}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${device.accent}, transparent)`,
          }}
        />

        <div className="relative flex flex-wrap items-end justify-between gap-x-4 gap-y-1 px-1 pb-4">
          <h3
            className="font-[family-name:var(--font-heading)] text-2xl font-semibold sm:text-3xl"
            style={{ color: device.accent }}
          >
            {device.name}
          </h3>
          <p className="text-sm text-[#8A8F98]">{device.tagline}</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Imagen animada */}
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-[#22262C]">
              <div className="petlink-kenburns relative">
                <Image
                  src={device.image}
                  alt={`${device.name} PetLink con sus partes`}
                  width={device.width}
                  height={device.height}
                  unoptimized
                  priority={false}
                  sizes="(min-width: 1024px) 976px, 92vw"
                  className="block h-auto w-full"
                />

                {/* Punto resaltado sobre la parte activa */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
                  style={place(device, part)}
                >
                  <span
                    className="absolute -inset-3 animate-ping rounded-full opacity-60"
                    style={{ background: device.accent }}
                  />
                  <span
                    className="relative block h-5 w-5 rounded-full border-2 sm:h-6 sm:w-6"
                    style={{
                      borderColor: device.accent,
                      background: `${device.accent}55`,
                      boxShadow: `0 0 18px ${device.accent}`,
                    }}
                  />
                </span>
              </div>

              <div aria-hidden className="petlink-shine pointer-events-none absolute inset-0" />
            </div>

            <p
              className="mt-3 flex items-center gap-2 px-1 text-sm font-medium text-[#F5F5F5]"
              aria-live="polite"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: device.accent }}
              />
              {part.label}
            </p>
          </div>

          {/* Desplegable de partes */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={`partes-${device.name}`}
            className="flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-300 hover:bg-[color:var(--accent)]/5"
            style={{
              borderColor: open ? `${device.accent}66` : "#22262C",
              background: open ? `${device.accent}0F` : "transparent",
            }}
          >
            <span className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#F5F5F5]">
              Conocé las partes
              <span className="ml-2 text-xs font-normal text-[#8A8F98]">
                {device.parts.length} componentes
              </span>
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={device.accent}
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            id={`partes-${device.name}`}
            className={`grid transition-all duration-500 ease-out ${
              open ? "-mt-1 grid-rows-[1fr] opacity-100" : "-mt-4 grid-rows-[0fr] opacity-0"
            }`}
            aria-hidden={!open}
          >
          <div className="overflow-hidden">
          <ul
            className="grid gap-1.5 pt-1 sm:grid-cols-2 lg:grid-cols-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {device.parts.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={p.label}>
                  <button
                    type="button"
                    tabIndex={open ? 0 : -1}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="flex w-full items-center gap-3 rounded-xl border px-3 py-2 text-left text-[13px] leading-snug transition-all duration-300"
                    style={{
                      borderColor: isActive ? `${device.accent}66` : "transparent",
                      background: isActive ? `${device.accent}14` : "transparent",
                      color: isActive ? "#F5F5F5" : "#8A8F98",
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-heading)] flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors duration-300"
                      style={{
                        borderColor: `${device.accent}${isActive ? "99" : "33"}`,
                        color: device.accent,
                        background: isActive ? `${device.accent}26` : "transparent",
                      }}
                    >
                      {i + 1}
                    </span>
                    {p.label}
                  </button>
                </li>
              );
            })}
          </ul>
          </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function DeviceShowcase() {
  return (
    <section
      id="equipos"
      className="scroll-mt-24 flex flex-col items-center px-5 py-12 sm:px-8 sm:py-16"
    >
      <SectionHeading
        eyebrow="Los equipos"
        title="Conocé los equipos"
        subtitle="Dos dispositivos, una misma app. Desplegá las partes y tocá cada una para verla en el equipo."
      />

      <div className="flex w-full max-w-5xl flex-col gap-8">
        {DEVICES.map((device, index) => (
          <DeviceCard key={device.name} device={device} delay={index * 120} />
        ))}
      </div>
    </section>
  );
}
