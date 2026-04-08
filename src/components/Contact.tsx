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
      whileHover={{ y: -8 }}
      className="block h-full"
    >
      <div className="bg-[#fffdf9] border border-brand-gold/20 rounded-2xl shadow-lg p-9 text-center hover:shadow-2xl hover:border-brand-gold/40 transition-all cursor-pointer h-full">
        <div className="text-5xl mb-5">{icon}</div>
        <p className="text-gray-600 text-sm uppercase tracking-wider mb-3">{label}</p>
        <p className="text-2xl font-bold text-brand-charcoal hover:text-brand-gold transition-colors break-words">{value}</p>
      </div>
    </motion.a>
  )

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-gold/10 to-transparent" />
      <div className="absolute -top-24 right-16 w-72 h-72 rounded-full border border-brand-gold/25" />
      <div className="absolute -bottom-24 left-10 w-60 h-60 rounded-full border border-brand-charcoal/20" />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-brand-charcoal mb-4">{t('contact_heading')}</h2>
          <p className="text-gray-700 text-lg">{t('contact_subheading')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-14">
          <ContactCard icon="📞" label={t('contact_phone')} value="+91 94037 63025" href="tel:+919403763025" type="call" />
          <ContactCard icon="💬" label={t('contact_whatsapp')} value="94037 63025" href="https://wa.me/919403763025?text=Hello, I have a query" type="whatsapp" />
          <ContactCard icon="📧" label={t('contact_email')} value="info@kohinoordoors.com" href="mailto:info@kohinoordoors.com" type="email" />
        </div>

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
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-brand-gold text-brand-charcoal font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all shadow-lg"
          >
            {t('contact_cta')} 💬
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
