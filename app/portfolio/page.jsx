// app/portfolio/page.js

// 1. Remove the redundant 'React' import
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'

// 2. Define specific metadata for the Portfolio page
export const metadata = {
  // Overrides the default title template from layout.js
  title: "Our Work & Projects Portfolio | NGIT Software Solutions",

  // Specific, keyword-rich description for search results
  description: "Explore our portfolio of high-impact projects, including custom software, full-stack web development, and mobile apps built using modern frameworks like Next.js and React.",

  // Optional: Add OpenGraph specifics for sharing this page
  openGraph: {
    title: "Portfolio of NGIT Software Solutions",
    // ... (other OpenGraph properties specific to the Portfolio page)
  }
};

const PortfolioPage = () => {
  return (
    // 3. Use a semantically appropriate main tag
    <main>
      <Navigation />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default PortfolioPage