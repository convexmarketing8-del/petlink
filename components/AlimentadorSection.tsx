import DeviceControlCard from "./DeviceControlCard";
import FeederBowlIcon from "./icons/FeederBowlIcon";
import Reveal from "./Reveal";

const OPTIONS = [
  { id: "porcion_chica", label: "Porción chica" },
  { id: "porcion_mediana", label: "Porción mediana" },
  { id: "porcion_grande", label: "Porción grande" },
];

export default function AlimentadorSection() {
  return (
    <section
      id="alimentador"
      className="scroll-mt-24 flex flex-col items-center px-5 pt-6 pb-10 sm:px-8 sm:pt-10 sm:pb-14"
    >
      <Reveal className="mb-7 max-w-md text-center sm:mb-9">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#F5F5F5] sm:text-4xl">
          Alimentador automático
        </h2>
        <p className="mt-3 text-base text-[#8A8F98] sm:text-lg">
          Elegí el tamaño de la porción y se la damos a tu mascota{" "}
          <span className="font-medium text-[#FF8A3D]">al instante</span>.
        </p>
      </Reveal>

      <Reveal delay={150} className="flex justify-center">
        <DeviceControlCard
          title="Alimentador"
          icon={<FeederBowlIcon />}
          accent="#FF8A3D"
          options={OPTIONS}
          node="alimentador"
        />
      </Reveal>
    </section>
  );
}
