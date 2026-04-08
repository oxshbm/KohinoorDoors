import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: t('nav_products'), to: 'products' },
    { label: t('nav_services'), to: 'services' },
    { label: t('nav_gallery'), to: 'gallery' },
    { label: t('nav_contact'), to: 'contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-charcoal text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="hero"
          spy
          smooth
          duration={500}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img
            src="/kohinoor-logo.png"
            alt="Kohinoor Doors Logo"
            className="h-10 sm:h-12 md:h-14 object-contain"
          />
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              className="cursor-pointer hover:text-brand-gold transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex gap-4 items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-brand-gold text-brand-charcoal font-semibold rounded hover:bg-brand-gold-light transition-all transform hover:scale-105"
          >
            {lang === 'en' ? 'हिं' : 'EN'}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 p-1"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-charcoal border-t border-brand-gold px-4 py-3">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white hover:text-brand-gold transition-colors cursor-pointer"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  )
}
