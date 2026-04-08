import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const handleWhatsApp = () => {
    const message = 'I want to inquire about your doors'
    const phone = '919403763025'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="hero" className="relative h-screen bg-brand-charcoal text-white overflow-hidden pt-16 flex items-center justify-center">
      {/* Door-themed Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-brand-gold opacity-5"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-brand-gold opacity-5"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative mb-8 mx-auto max-w-2xl">
          {/* Decorative door frame */}
          <motion.div
            className="absolute -inset-4 md:-inset-6 border border-brand-gold/35 rounded-md"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          />
          <motion.div
            className="absolute -inset-2 md:-inset-3 border border-brand-gold/20 rounded-md"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.45 }}
          />

          {/* Opening door panels */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-1/2 rounded-l-md bg-gradient-to-r from-[#2a1b12] to-[#3b2a1d] border-r border-brand-gold/30"
            initial={{ x: 0 }}
            animate={{ x: '-105%' }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-3 border border-brand-gold/25 rounded-sm" />
            <div className="absolute inset-x-6 top-8 bottom-8 border border-brand-gold/20 rounded-sm" />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-11 rounded-full bg-gradient-to-b from-[#f4d27f] to-[#9a772f] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </motion.div>
          <motion.div
            className="absolute top-0 bottom-0 right-0 w-1/2 rounded-r-md bg-gradient-to-l from-[#2a1b12] to-[#3b2a1d] border-l border-brand-gold/30"
            initial={{ x: 0 }}
            animate={{ x: '105%' }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-3 border border-brand-gold/25 rounded-sm" />
            <div className="absolute inset-x-6 top-8 bottom-8 border border-brand-gold/20 rounded-sm" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-11 rounded-full bg-gradient-to-b from-[#f4d27f] to-[#9a772f] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="relative text-5xl md:text-7xl font-bold px-4 py-8 text-brand-gold leading-tight"
          >
            {t('hero_tagline')}
          </motion.h1>
        </div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-300 mb-10"
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-brand-gold text-brand-charcoal font-bold text-lg rounded-lg hover:bg-brand-gold-light transition-all shadow-lg hover:shadow-2xl"
        >
          {t('hero_cta')}
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
