import { Link as ScrollLink } from 'react-scroll'
import { useLanguage } from '@/context/LanguageContext'


export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-2">
              {t('footer_brand')}
            </h3>
            <p className="text-gray-400">{t('footer_tagline')}</p>
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
                  className="text-gray-400 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Products
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth
                  duration={500}
                  className="text-gray-400 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  smooth
                  duration={500}
                  className="text-gray-400 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  className="text-gray-400 hover:text-brand-gold transition-colors cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-brand-gold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">📞 +91 94037 63025</p>
            <p className="text-gray-400 mb-2">💬 WhatsApp: +91 94037 63025</p>
            <p className="text-gray-400">📧 info@kohinoordoors.com</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>{t('footer_copyright')}</p>
          <p className="text-sm mt-2">Crafted with ❤️ for quality doors</p>
        </div>
      </div>
    </footer>
  )
}
