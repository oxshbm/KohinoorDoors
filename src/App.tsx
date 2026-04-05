import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  )
}

export default App
