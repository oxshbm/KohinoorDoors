import { Link as ScrollLink } from 'react-scroll'
import { useLanguage } from '@/context/LanguageContext'


export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-gradient-to-b from-[#181528] to-[#11101d] text-white py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_10%_20%,rgba(201,168,76,0.35)_0,transparent_30%),radial-gradient(circle_at_90%_80%,rgba(201,168,76,0.22)_0,transparent_28%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(201,168,76,0.14)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold text-brand-gold mb-3">
              {t('footer_brand')}
            </h3>
            <p className="text-gray-300 text-lg">{t('footer_tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-brand-gold mb-4">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="products"
                  smooth
                  duration={500}
                  className="text-gray-300 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Products
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth
                  duration={500}
                  className="text-gray-300 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  smooth
                  duration={500}
                  className="text-gray-300 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  className="text-gray-300 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-brand-gold mb-4">Contact</h4>
            <p className="text-gray-300 mb-3">📞 +91 94037 63025</p>
            <p className="text-gray-300 mb-3">💬 WhatsApp: +91 94037 63025</p>
            <p className="text-gray-300">📧 info@kohinoordoors.com</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-brand-gold/20 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>{t('footer_copyright')}</p>
          <p className="text-sm mt-2 text-gray-500">Crafted with ❤️ for quality doors</p>
        </div>
      </div>
    </footer>
  )
}
