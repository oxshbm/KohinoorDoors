import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'


export default function FloatingWhatsApp() {
  const { t } = useLanguage()

  const handleClick = () => {
    const message = 'I want to inquire about your doors'
    const phone = '919403763025'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-lg hover:shadow-2xl flex items-center justify-center cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={t('floating_whatsapp_tooltip')}
    >
      {/* WhatsApp Icon */}
      <svg
        className="w-7 h-7 md:w-8 md:h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.239l-.376.223-.389-.076c-1.327-.254-2.526-.883-3.476-2.022-1.048-1.218-1.62-2.75-1.62-4.408 0-3.864 3.163-7.006 7.054-7.006 1.898 0 3.674.722 5.01 2.032 1.336 1.31 2.073 3.068 2.073 4.92 0 3.878-3.157 7.018-7.05 7.048z" />
      </svg>
    </motion.button>
  )
}
