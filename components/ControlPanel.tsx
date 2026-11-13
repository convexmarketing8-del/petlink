import DeviceControlCard from "./DeviceControlCard";
import FeederBowlIcon from "./icons/FeederBowlIcon";
import WaterDropletIcon from "./icons/WaterDropletIcon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const FEEDER_OPTIONS = [
  { id: "porcion_chica", label: "Porción chica", value: "CHICA" },
  { id: "porcion_mediana", label: "Porción mediana", value: "MEDIANA" },
  { id: "porcion_grande", label: "Porción grande", value: "GRANDE" },
];

const WATER_OPTIONS = [
  { id: "10s", label: "10 segundos", value: 10 },
  { id: "20s", label: "20 segundos", value: 20 },
  { id: "30s", label: "30 segundos", value: 30 },
];

export default function ControlPanel() {
  return (
    <section className="flex flex-col items-center px-5 py-12 sm:px-8 sm:py-16">
      <SectionHeading
        eyebrow="Panel de control"
        title="Todo a un toque de distancia"
        subtitle="Elegí una opción y el equipo la ejecuta al instante."
      />

      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
        <div id="alimentador" className="scroll-mt-24">
          <Reveal className="flex h-full justify-center">
            <DeviceControlCard
              title="Alimentador"
              subtitle="Elegí el tamaño de la porción"
              icon={<FeederBowlIcon />}
              accent="#FF8A3D"
              options={FEEDER_OPTIONS}
              kind="alimentador"
            />
          </Reveal>
        </div>

        <div id="bebedero" className="scroll-mt-24">
          <Reveal delay={150} className="flex h-full justify-center">
            <DeviceControlCard
              title="Bebedero"
              subtitle="Elegí cuánto tiempo corre el agua"
              icon={<WaterDropletIcon />}
              accent="#3DC9FF"
              options={WATER_OPTIONS}
              kind="bebedero"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
