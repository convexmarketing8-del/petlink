import DeviceControlCard from "./DeviceControlCard";
import WaterDropletIcon from "./icons/WaterDropletIcon";
import Reveal from "./Reveal";

const OPTIONS = [
  { id: "10s", label: "10 segundos", value: 10 },
  { id: "20s", label: "20 segundos", value: 20 },
  { id: "30s", label: "30 segundos", value: 30 },
];

export default function BebederoSection() {
  return (
    <section
      id="bebedero"
      className="scroll-mt-24 flex flex-col items-center px-5 py-10 sm:px-8 sm:py-14"
    >
      <Reveal className="mb-10 max-w-md text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#F5F5F5] sm:text-4xl">
          Bebedero automático
        </h2>
        <p className="mt-3 text-base text-[#8A8F98] sm:text-lg">
          Elegí cuánto tiempo se sirve el agua y lo hacemos{" "}
          <span className="font-medium text-[#3DC9FF]">al instante</span>.
        </p>
      </Reveal>

      <Reveal delay={150} className="flex justify-center">
        <DeviceControlCard
          title="Bebedero"
          icon={<WaterDropletIcon />}
          accent="#3DC9FF"
          options={OPTIONS}
          kind="bebedero"
        />
      </Reveal>
    </section>
  );
}
