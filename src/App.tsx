import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import NewAgeDoors from '@/components/NewAgeDoors'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import DoorOpeningAnimation from '@/components/DoorOpeningAnimation'

function App() {
  const [showOpeningAnimation, setShowOpeningAnimation] = useState(true)

  return (
    <LanguageProvider>
      <AnimatePresence>
        {showOpeningAnimation ? (
          <DoorOpeningAnimation onComplete={() => setShowOpeningAnimation(false)} />
        ) : null}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Products />
      <NewAgeDoors />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  )
}

export default App
