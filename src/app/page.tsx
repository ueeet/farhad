import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Calculator } from "@/components/Calculator";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-bg text-text">
      <Nav />
      <Hero />
      <Services />
      <Showreel />
      <Gallery />
      <About />
      <Calculator />
      <Faq />
      <Footer />
    </main>
  );
}
