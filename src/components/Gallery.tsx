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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-[#f3ede3] to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-brand-gold/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-brand-charcoal/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(26,26,46,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(26,26,46,0.08)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-brand-charcoal mb-4">{t('gallery_heading')}</h2>
          <p className="text-gray-700 text-lg">{t('gallery_subheading')}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {placeholders.map((idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="cursor-pointer"
            >
              <div className="relative h-72 bg-gradient-to-br from-brand-charcoal via-[#3a314f] to-brand-gold rounded-2xl overflow-hidden shadow-lg border border-brand-gold/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_45%)]" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center px-6 text-center text-white text-lg font-semibold"
                  animate={{ opacity: [0.55, 0.8, 0.55] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {t('gallery_coming')}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-14 p-8 bg-[#fffdf9] border border-brand-gold/20 rounded-2xl shadow-md max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg">✨ Our gallery will showcase actual door installations and projects. Stay tuned!</p>
        </motion.div>
      </div>
    </section>
  )
}
