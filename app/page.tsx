import { Brands } from "@/components/brands";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { ServicesSection } from "@/components/services-section";
import { StartProject } from "@/components/start-project";
import { Testimonials } from "@/components/testimonials";
import { Trust } from "@/components/trust";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <ServicesSection />
        <Portfolio />
        <Testimonials />
        <Mission />
        <Brands />
        <StartProject />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
