import Hero from '../components/Hero'
import Problem from '../components/Problem'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import AISection from '../components/AISection'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <SocialProof />
      <HowItWorks />
      <AISection />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
