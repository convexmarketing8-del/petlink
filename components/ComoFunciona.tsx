import { HeartIcon, SignalIcon, TapIcon } from "./icons/StepIcons";
import type { ComponentType } from "react";

const STEPS: {
  number: string;
  title: string;
  description: string;
  accent: string;
  Icon: ComponentType<{ size?: number }>;
}[] = [
  {
    number: "1",
    title: "Elegís la opción",
    description:
      "Desde tu celular, tocás el botón de la porción o el tiempo que quieras.",
    accent: "#FF8A3D",
    Icon: TapIcon,
  },
  {
    number: "2",
    title: "Se envía al instante",
    description: "Tu pedido llega enseguida, sin que tengas que hacer nada más.",
    accent: "#3DC9FF",
    Icon: SignalIcon,
  },
  {
    number: "3",
    title: "Tu mascota recibe su premio",
    description: "En segundos, tu mascota ya tiene su comida o agua lista.",
    accent: "#4ADE80",
    Icon: HeartIcon,
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 flex flex-col items-center px-5 py-10 pb-20 sm:px-8 sm:py-14 sm:pb-24"
    >
      <div className="mb-12 max-w-md text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#F5F5F5] sm:text-4xl">
          Cómo funciona
        </h2>
        <p className="mt-3 text-base font-medium text-[#F5F5F5]/80 sm:text-lg">
          Así de simple, en tres pasos.
        </p>
      </div>

      <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="group rounded-3xl border border-[#22262C] bg-[#161A1F] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[color:var(--accent)] hover:shadow-[0_12px_32px_-16px_var(--accent-glow)] sm:text-left"
            style={
              {
                "--accent": step.accent,
                "--accent-glow": `${step.accent}66`,
              } as React.CSSProperties
            }
          >
            <div
              className="mx-auto flex h-9 w-9 items-center justify-center transition-colors duration-300 sm:mx-0"
              style={{ color: step.accent }}
            >
              <step.Icon size={24} />
            </div>

            <span
              className="font-[family-name:var(--font-heading)] mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full border text-base font-semibold sm:mx-0"
              style={{
                background: `radial-gradient(circle at 30% 25%, ${step.accent}33, ${step.accent}0D)`,
                borderColor: `${step.accent}40`,
                color: step.accent,
              }}
            >
              {step.number}
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F5F5]">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-[#8A8F98]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
