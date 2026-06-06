import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ThreeSteps from "@/components/sections/ThreeSteps";
import Experience from "@/components/sections/Experience";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import Skills from "@/components/sections/Skills";
import ClientLogos from "@/components/sections/ClientLogos";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThreeSteps />
        <Experience />
        <Industries />
        <Testimonials />
        <Skills />
        <ClientLogos />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
