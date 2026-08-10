import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Marquee from "@/components/sections/marquee";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Process from "@/components/sections/process";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Marquee />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
