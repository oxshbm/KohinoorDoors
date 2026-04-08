import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Products() {
  const { t } = useLanguage()

  const ProductCard = ({ title, description, features, buttonLabel, messageText, imageUrl, imageAlt }: any) => {
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
          className="bg-[#fffdf9] border border-brand-gold/20 rounded-3xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Vertical Door Image */}
          <div className="h-72 sm:h-80 md:h-[420px] relative overflow-hidden">
            <img
              src={imageUrl}
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/Laminated.jpg'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          {/* Card Info */}
          <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal mb-3">{title}</h3>
            <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">{description}</p>

            {/* Features */}
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7 flex-grow">
              {features.map((feature: string, idx: number) => (
                <motion.li
                  key={idx}
                  className="flex items-center text-sm sm:text-[15px] text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-2.5 h-2.5 bg-brand-gold rounded-full mr-3"></span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-brand-gold text-brand-charcoal font-bold py-3.5 rounded-xl hover:bg-brand-gold-light transition-all"
            >
              {buttonLabel}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section id="products" className="relative py-16 md:py-24 bg-gradient-to-b from-brand-cream to-[#f3ede3] overflow-hidden">
      <div className="absolute -top-24 -left-20 w-56 h-56 md:w-72 md:h-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-64 h-64 md:w-80 md:h-80 rounded-full bg-brand-charcoal/10 blur-3xl" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,rgba(201,168,76,0.16)_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-3 md:mb-4">
            {t('products_heading')}
          </h2>
          <p className="text-gray-700 text-base md:text-lg">{t('products_subheading')}</p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
            imageUrl="/frp.jpg"
            imageAlt="FRP style modern door"
          />

          <ProductCard
            title={t('coating_title')}
            description={t('coating_desc')}
            features={[
              t('coating_feature_1'),
              t('coating_feature_2'),
              t('coating_feature_3'),
              t('coating_feature_4'),
              t('coating_feature_5'),
            ]}
            buttonLabel={t('coating_cta')}
            messageText="I want to inquire about Coating Doors"
            imageUrl="/coating.jpg"
            imageAlt="Coating finish wooden door"
          />

          <ProductCard
            title={t('laminated_only_title')}
            description={t('laminated_only_desc')}
            features={[
              t('laminated_only_feature_1'),
              t('laminated_only_feature_2'),
              t('laminated_only_feature_3'),
              t('laminated_only_feature_4'),
              t('laminated_only_feature_5'),
            ]}
            buttonLabel={t('laminated_only_cta')}
            messageText="I want to inquire about Laminated Doors"
            imageUrl="/Laminated.jpg"
            imageAlt="Laminated interior door"
          />

          <ProductCard
            title={t('pvc_title')}
            description={t('pvc_desc')}
            features={[
              t('pvc_feature_1'),
              t('pvc_feature_2'),
              t('pvc_feature_3'),
              t('pvc_feature_4'),
              t('pvc_feature_5'),
            ]}
            buttonLabel={t('pvc_cta')}
            messageText="I want to inquire about PVC Doors"
            imageUrl="https://images.pexels.com/photos/8134816/pexels-photo-8134816.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imageAlt="PVC door"
          />
        </div>
      </div>
    </section>
  )
}
