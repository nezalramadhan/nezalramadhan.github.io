import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/ui/Marquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Technologies } from "@/components/sections/Technologies";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";

/**
 * Home page. Section order follows the reader's story:
 * identity (hero) -> who I am (about) -> what I use (tech) -> what I built
 * (work) -> education + experience -> get in touch (contact).
 */
export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      {/* Tape band separating the cover from the contents (DESIGN.md) */}
      <Marquee words={["Web Developer", "Informatics Graduate", "Laravel", "React", "Open to Work"]} />
      <About />
      <Technologies />
      <SelectedWork />
      <Background />
      <Contact />
      <Footer />
    </main>
  );
}