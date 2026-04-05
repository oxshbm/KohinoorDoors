import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'


export default function Contact() {
  const { t } = useLanguage()

  const ContactCard = ({ icon, label, value, href, type }: any) => (
    <motion.a
      href={href}
      target={type === 'whatsapp' || type === 'call' ? '_blank' : '_self'}
      rel={type === 'whatsapp' || type === 'call' ? 'noopener noreferrer' : ''}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="block"
    >
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:bg-brand-cream transition-all cursor-pointer h-full">
        <div className="text-5xl mb-4">{icon}</div>
        <p className="text-gray-600 text-sm mb-2">{label}</p>
        <p className="text-2xl font-bold text-brand-charcoal hover:text-brand-gold transition-colors">
          {value}
        </p>
      </div>
    </motion.a>
  )

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-brand-charcoal mb-4">
            {t('contact_heading')}
          </h2>
          <p className="text-gray-700 text-lg">{t('contact_subheading')}</p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <ContactCard
            icon="📞"
            label={t('contact_phone')}
            value="+91 94037 63025"
            href="tel:+919403763025"
            type="call"
          />
          <ContactCard
            icon="💬"
            label={t('contact_whatsapp')}
            value="94037 63025"
            href="https://wa.me/919403763025?text=Hello, I have a query"
            type="whatsapp"
          />
          <ContactCard
            icon="📧"
            label={t('contact_email')}
            value="info@kohinoordoors.com"
            href="mailto:info@kohinoordoors.com"
            type="email"
          />
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://wa.me/919403763025?text=Hello, I want to inquire about your doors"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-brand-gold text-brand-charcoal font-bold text-lg rounded-lg hover:bg-brand-gold-light transition-all shadow-lg"
          >
            {t('contact_cta')} 💬
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
