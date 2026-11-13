import { ArrowUpRight, Eye, Mail, MessageCircle, Target } from "lucide-react";
import type { ComponentType, CSSProperties } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Instagram({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const ABOUT: {
  tag: string;
  title: string;
  text: string;
  accent: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  keywords: string[];
}[] = [
  {
    tag: "01",
    title: "Misión",
    text: "Somos una empresa joven, con mucha predisposición para satisfacer las necesidades de nuestros próximos clientes, dándole prioridad a sus necesidades y junto con ello queremos resolver la problemática de alimentar a nuestras mascotas a distancia.",
    accent: "#FF8A3D",
    Icon: Target,
    keywords: ["Empresa joven", "Predisposición", "A distancia"],
  },
  {
    tag: "02",
    title: "Visión",
    text: "Nuestra visión es mejorar el día a día de las personas, así como satisfacer las necesidades de nuestras mascotas. Ofrecer el mejor servicio, tanto en el producto, como en nuestra disponibilidad para el cliente en todo momento, para que se sienta cómodo y confiado.",
    accent: "#3DC9FF",
    Icon: Eye,
    keywords: ["Mejor servicio", "Disponibilidad", "Confianza"],
  },
];

const SECONDARY: {
  label: string;
  value: string;
  href: string;
  accent: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}[] = [
  {
    label: "Instagram",
    value: "@petlinkya",
    href: "https://instagram.com/petlinkya",
    accent: "#FF8A3D",
    Icon: Instagram,
  },
  {
    label: "Correo electrónico",
    value: "juanzagales15@gmail.com",
    href: "mailto:juanzagales15@gmail.com",
    accent: "#3DC9FF",
    Icon: Mail,
  },
];

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 flex flex-col items-center px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24"
    >
      <SectionHeading
        eyebrow="Nosotros"
        title="Tecnología pensada para quienes más querés"
        subtitle="Un proyecto joven con un objetivo claro: que cuidar a tu mascota sea simple, estés donde estés."
      />

      {/* Misión y visión */}
      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
        {ABOUT.map((item, index) => (
          <Reveal key={item.title} delay={index * 140}>
            <article
              className="group relative h-full overflow-hidden rounded-3xl border border-[#22262C] bg-[#161A1F] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--accent)] hover:shadow-[0_16px_40px_-20px_var(--accent-glow)] sm:p-8"
              style={
                {
                  "--accent": item.accent,
                  "--accent-glow": `${item.accent}80`,
                } as CSSProperties
              }
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: item.accent }}
              />
              <span
                aria-hidden
                className="font-[family-name:var(--font-heading)] pointer-events-none absolute right-6 top-3 text-7xl font-bold leading-none opacity-[0.06]"
              >
                {item.tag}
              </span>

              <div className="relative flex items-center gap-3.5">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                  style={{
                    background: `${item.accent}1A`,
                    borderColor: `${item.accent}40`,
                    color: item.accent,
                  }}
                >
                  <item.Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5]">
                  {item.title}
                </h3>
              </div>

              <p className="relative mt-5 text-[15px] leading-relaxed text-[#9BA0A8]">
                {item.text}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {item.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border px-3 py-1 text-xs font-medium"
                    style={{
                      color: item.accent,
                      borderColor: `${item.accent}33`,
                      background: `${item.accent}0F`,
                    }}
                  >
                    {k}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Contacto */}
      <Reveal className="mt-6 max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#22262C] bg-[#161A1F] p-7 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-[#4ADE80] opacity-15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#FF8A3D] opacity-15 blur-3xl"
          />

          <div className="relative grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="text-center md:text-left">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5] sm:text-3xl">
                ¿Hablamos?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#9BA0A8]">
                Escribinos y te respondemos a la brevedad. Consultanos por el
                producto, una demo o cualquier duda.
              </p>

              <a
                href="https://wa.me/543534777819"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#4ADE80] py-3 pl-6 pr-4 text-sm font-semibold text-[#0D0F12] shadow-[0_12px_30px_-12px_rgba(74,222,128,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_rgba(74,222,128,1)] active:scale-95"
              >
                <MessageCircle size={18} strokeWidth={2.25} />
                <span>Escribinos por WhatsApp</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D0F12]/15 transition-transform duration-300 group-hover:rotate-12">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {SECONDARY.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[#22262C] bg-[#0D0F12]/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
                  style={{ "--accent": c.accent } as CSSProperties}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      background: `${c.accent}1A`,
                      borderColor: `${c.accent}40`,
                      color: c.accent,
                    }}
                  >
                    <c.Icon size={19} strokeWidth={2} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[#8A8F98]">{c.label}</span>
                    <span className="block truncate text-sm font-semibold text-[#F5F5F5]">
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-[#8A8F98] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]"
                  />
                </a>
              ))}
              <p className="mt-1 text-center text-xs text-[#8A8F98] md:text-left">
                WhatsApp: 353 477-7819
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
