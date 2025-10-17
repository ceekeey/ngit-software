import About from "@/components/About";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Portpolio from "@/components/Portpolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Training from "@/components/Training";
import React from "react";

const hompage = () => {
  return (
    <main className="bg-background text-text min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Services />
      <Training />
      <Portpolio />
      <Client />
      <Footer />
    </main>
  );
};

export default hompage;
