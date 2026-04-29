import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonals";
import AccredianEdge from "./components/AccredianEdge";

import Clients from "./components/Clients"
import Cat from "./components/Cat";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <Stats />
       <Clients/>
        <AccredianEdge/>
      <Cat/>
      <HowItWorks/>
      <FAQ/>
      <Testimonials />
      <Footer />

     
    </>
  );
}