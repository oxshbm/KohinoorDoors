import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'


export default function Gallery() {
  const { t } = useLanguage()

  const placeholders = Array.from({ length: 6 }, (_, i) => i)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="gallery" className="py-20 bg-brand-cream">
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
            {t('gallery_heading')}
          </h2>
          <p className="text-gray-700 text-lg">{t('gallery_subheading')}</p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {placeholders.map((idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-brand-charcoal via-brand-gold to-brand-gold-light rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-60"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {t('gallery_coming')}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Note */}
        <motion.div
          className="text-center mt-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700">
            ✨ Our gallery will showcase actual door installations and projects. Stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
