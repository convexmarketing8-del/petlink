import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackgroundLayer from "@/components/BackgroundLayer";
import AlimentadorSection from "@/components/AlimentadorSection";
import BebederoSection from "@/components/BebederoSection";
import ComoFunciona from "@/components/ComoFunciona";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundLayer />
      <Header />
      <main className="flex flex-col">
        <Hero />
        <AlimentadorSection />
        <BebederoSection />
        <ComoFunciona />
      </main>
    </div>
  );
}
