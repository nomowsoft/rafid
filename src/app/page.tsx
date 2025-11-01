import { Achievements } from "./components/home/achievements";
import { Hero } from "./components/home/hero";
import { Partners } from "./components/home/partners";
import { ServicesActivites } from "./components/home/services_activites";
import { Values } from "./components/home/values";
import { VisionMessage } from "./components/home/vision_message";

export default function Home() {
  return (
    <section>
      <Hero />
      <VisionMessage />
      <Values />
      <ServicesActivites />
      <Achievements />
      <Partners />
    </section>
  );
}
