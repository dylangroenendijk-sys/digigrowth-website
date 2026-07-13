import Hero from '../components/Hero'
import Problem from '../components/Problem'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import AISection from '../components/AISection'
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
      <CTA />
      <Footer />
    </main>
  )
}
