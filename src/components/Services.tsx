import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const ServiceCard = ({ icon, title, description, dark = false }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <div
        className={`rounded-3xl p-10 md:p-12 h-full border transition-all ${
          dark
            ? 'bg-brand-charcoal text-white border-brand-gold/30 shadow-xl'
            : 'bg-[#fffdf9] text-brand-charcoal border-brand-gold/20 shadow-lg'
        }`}
      >
        <div className="text-6xl mb-6">{icon}</div>
        <h3 className={`text-3xl font-bold mb-4 ${dark ? 'text-brand-gold-light' : 'text-brand-charcoal'}`}>{title}</h3>
        <p className={`${dark ? 'text-gray-200' : 'text-gray-600'} text-lg leading-relaxed`}>{description}</p>
      </div>
    </motion.div>
  )

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_15%_20%,rgba(201,168,76,0.18),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(26,26,46,0.14),transparent_40%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(-45deg,rgba(201,168,76,0.12)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-brand-charcoal mb-4">{t('services_heading')}</h2>
          <p className="text-gray-700 text-lg">{t('services_subheading')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ServiceCard icon="🚚" title={t('delivery_title')} description={t('delivery_desc')} dark />
          <ServiceCard icon="🔧" title={t('installation_title')} description={t('installation_desc')} />
        </div>
      </div>
    </section>
  )
}
