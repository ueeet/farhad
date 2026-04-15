import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Calculator } from "@/components/Calculator";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-bg text-text">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Calculator />
      <Gallery />
      <Footer />
    </main>
  );
}
