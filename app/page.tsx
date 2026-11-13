import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackgroundLayer from "@/components/BackgroundLayer";
import DeviceShowcase from "@/components/DeviceShowcase";
import ControlPanel from "@/components/ControlPanel";
import ComoFunciona from "@/components/ComoFunciona";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundLayer />
      <Header />
      <main className="flex flex-col">
        <Hero />
        <DeviceShowcase />
        <ControlPanel />
        <ComoFunciona />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
