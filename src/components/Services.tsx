import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const ServiceCard = ({ icon, title, description }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -15 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow h-full">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-brand-charcoal mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )

  return (
    <section id="services" className="py-20 bg-white">
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
            {t('services_heading')}
          </h2>
          <p className="text-gray-700 text-lg">{t('services_subheading')}</p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          <ServiceCard
            icon="🚚"
            title={t('delivery_title')}
            description={t('delivery_desc')}
          />
          <ServiceCard
            icon="🔧"
            title={t('installation_title')}
            description={t('installation_desc')}
          />
        </div>
      </div>
    </section>
  )
}
