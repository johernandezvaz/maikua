import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Research } from "@/components/research";
import { Projects } from "@/components/projects";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Research />
      <Projects />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}