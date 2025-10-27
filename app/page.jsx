// app/page.js

// 1. We remove the 'React' import as it's not needed for Server Components.
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Training from "@/components/Training";
import Client from "@/components/Client";
import Footer from "@/components/Footer";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Ngit Software Solutions",
  description: "Accelerate your business with modern, high-performance web and mobile applications. Ngit specializes in Next.js, full-stack development, and enterprise training.",
};

export default function HomePage() {
  return (
    <main>
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