import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Products() {
  const { t } = useLanguage()

  const ProductCard = ({ title, description, features, buttonLabel, messageText }: any) => {
    const handleWhatsApp = () => {
      const phone = '919403763025'
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`, '_blank')
    }

    return (
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image Placeholder */}
          <div className="h-48 bg-gradient-to-br from-brand-charcoal to-brand-gold relative overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-6 flex-grow">
              {features.map((feature: string, idx: number) => (
                <motion.li
                  key={idx}
                  className="flex items-center text-sm text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-brand-gold text-brand-charcoal font-bold py-3 rounded-lg hover:bg-brand-gold-light transition-all"
            >
              {buttonLabel}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section id="products" className="py-20 bg-brand-cream">
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
            {t('products_heading')}
          </h2>
          <p className="text-gray-700 text-lg">{t('products_subheading')}</p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <ProductCard
            title={t('laminated_title')}
            description={t('laminated_desc')}
            features={[
              t('laminated_feature_1'),
              t('laminated_feature_2'),
              t('laminated_feature_3'),
              t('laminated_feature_4'),
              t('laminated_feature_5'),
            ]}
            buttonLabel={t('laminated_cta')}
            messageText="I want to inquire about Laminated Coating Doors"
          />

          <ProductCard
            title={t('frp_title')}
            description={t('frp_desc')}
            features={[
              t('frp_feature_1'),
              t('frp_feature_2'),
              t('frp_feature_3'),
              t('frp_feature_4'),
              t('frp_feature_5'),
            ]}
            buttonLabel={t('frp_cta')}
            messageText="I want to inquire about FRP Doors"
          />
        </div>
      </div>
    </section>
  )
}
