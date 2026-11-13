import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: React.ReactNode;
  accent?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent = "#FF8A3D",
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 flex max-w-xl flex-col items-center text-center sm:mb-12">
      <span
        className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{
          color: accent,
          borderColor: `${accent}40`,
          background: `${accent}12`,
        }}
      >
        <span className="h-1 w-1 rounded-full" style={{ background: accent }} />
        {eyebrow}
      </span>
      <h2 className="font-[family-name:var(--font-heading)] mt-4 text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[#8A8F98] sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
