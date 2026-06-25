import Hero from '../components/Hero'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import AISection from '../components/AISection'
import DatabaseReactivation from '../components/DatabaseReactivation'
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
      <DatabaseReactivation />
      <CTA />
      <Footer />
    </main>
  )
}
