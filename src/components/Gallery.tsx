import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()

  const galleryItems = [
    {
      title: 'Modern Door Design',
      image: 'https://images.pexels.com/photos/18231392/pexels-photo-18231392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Premium Wooden Door',
      image: '/Laminated.jpg',
    },
    {
      title: 'Door Installation Site',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Factory Floor',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Construction Project',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Door PNG Render',
      image: 'https://pngimg.com/d/door_PNG17595.png',
    },
    {
      title: 'Stylish Entry Door',
      image: '/coating.jpg',
    },
    {
      title: 'Door PNG Preview',
      image: 'https://pngimg.com/d/door_PNG17617.png',
    },
    {
      title: 'On-site Installation Team',
      image: '/frp.jpg',
    },
  ]

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
    <section id="gallery" className="relative py-16 md:py-24 bg-gradient-to-b from-[#f3ede3] to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[32rem] md:h-[32rem] bg-brand-gold/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[18rem] h-[18rem] md:w-[28rem] md:h-[28rem] bg-brand-charcoal/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(26,26,46,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(26,26,46,0.08)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-3 md:mb-4">{t('gallery_heading')}</h2>
          <p className="text-gray-700 text-base md:text-lg">{t('gallery_subheading')}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="cursor-pointer"
            >
              <div className="relative h-60 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-brand-gold/20 bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${item.image.endsWith('.png') ? 'object-contain p-4 bg-white' : 'object-cover'}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/Laminated.jpg'
                    e.currentTarget.className = 'w-full h-full object-cover'
                  }}
                />
                {!item.image.endsWith('.png') && <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />}
                <p className={`absolute bottom-3 left-3 right-3 text-sm sm:text-base font-semibold leading-tight ${item.image.endsWith('.png') ? 'text-brand-charcoal' : 'text-white'}`}>
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10 md:mt-14 p-6 md:p-8 bg-[#fffdf9] border border-brand-gold/20 rounded-2xl shadow-md max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-base md:text-lg">✨ Our gallery will showcase actual door installations and projects. Stay tuned!</p>
        </motion.div>
      </div>
    </section>
  )
}
