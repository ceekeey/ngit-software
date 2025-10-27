import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import MissionVision from '@/components/MissionVision'
import CTA from '@/components/CTA'
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Our Story, Mission & Vision | NGIT Software Solutions",
  description: "Learn about NGIT Software Solutions' mission to deliver innovative, high-performance web and mobile development, our core values, and the dedicated team driving our success.",
  // Optional: Add canonical URL if appropriate
  // canonical: 'https://yourwebsite.com/about', 
  // Optional: Add OpenGraph specifics for sharing this page
  openGraph: {
    title: "Our Story, Mission & Vision | NGIT",
    // ... (other OpenGraph properties specific to the About page)
  }
};

const AboutPage = () => {
  return (
    <main>
      <Navigation />
      <About />
      <MissionVision />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

export default AboutPage