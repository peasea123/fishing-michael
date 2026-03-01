import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Boats from "./components/Boats";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Boats />
        <Gallery />
        <Testimonials />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
