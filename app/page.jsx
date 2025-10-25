import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Training from "@/components/Training";
import React from "react";
import { Toaster } from "react-hot-toast";

const hompage = () => {
  return (
    <main className="bg-background text-text min-h-screen">
      <Navigation />
      <Hero />
      <Team />
      <Services />
      <Training />
      <Client />
      <Footer />
      <Toaster />
    </main>
  );
};

export default hompage;
