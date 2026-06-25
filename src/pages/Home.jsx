import Hero from '../components/Hero'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import AISection from '../components/AISection'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
      <AISection />
      <CTA />
      <Footer />
    </main>
  )
}
