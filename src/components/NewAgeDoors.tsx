import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function NewAgeDoors() {
  const { t } = useLanguage()

  const doors = [
    {
      title: t('laminated_only_title'),
      image:
        'https://source.unsplash.com/1200x1600/?laminated,door,modern,interior',
    },
    {
      title: t('pvc_title'),
      image: 'https://source.unsplash.com/1200x1600/?pvc,door,modern,home',
    },
    {
      title: t('coating_title'),
      image:
        'https://source.unsplash.com/1200x1600/?coating,wooden,door,stylish',
    },
    {
      title: t('frp_title'),
      image: 'https://source.unsplash.com/1200x1600/?frp,door,designer,home',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-3 md:mb-4">
            {t('new_age_heading')}
          </h2>
          <p className="text-gray-700 text-base md:text-lg">{t('new_age_subheading')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doors.map((door, idx) => (
            <motion.div
              key={door.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-brand-gold/20 bg-[#fffdf9]"
            >
              <div className="relative h-72 sm:h-80 md:h-96">
                <img
                  src={door.image}
                  alt={door.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">
                  {door.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
