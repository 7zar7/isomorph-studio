import CommandMenu from "@/components/CommandMenu";
import Nav from "@/components/Nav";
import Configurator from "@/components/sections/Configurator";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import Mechanism from "@/components/sections/Mechanism";
import Objections from "@/components/sections/Objections";
import PainMirror from "@/components/sections/PainMirror";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="relative">
      <CommandMenu />
      <Nav />
      <Hero />
      <PainMirror />
      <Mechanism />
      <Services />
      <SelectedWork />
      <Configurator />
      <Objections />
      <FinalCTA />
    </main>
  );
}
