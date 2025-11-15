import { Hero } from "./components/home/hero";
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
    </section>
  );
}
