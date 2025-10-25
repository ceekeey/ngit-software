import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import MissionVision from '@/components/MissionVision'
import CTA from '@/components/CTA'
import Testimonials from "@/components/Testimonials";
import React from 'react'

const AboutPage = () => {
  return (
    <div>       
      <Navigation />
      <About />
      <MissionVision />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default AboutPage
