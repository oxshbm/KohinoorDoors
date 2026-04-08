import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface DoorOpeningAnimationProps {
  onComplete: () => void
}

export default function DoorOpeningAnimation({ onComplete }: DoorOpeningAnimationProps) {
  const doorDelay = 0.65
  const doorDuration = 3.2
  const totalAnimationTimeMs = (doorDelay + doorDuration + 0.05) * 1000

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete()
    }, totalAnimationTimeMs)

    return () => window.clearTimeout(timer)
  }, [onComplete, totalAnimationTimeMs])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-brand-charcoal overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.86, y: 10 }}
        animate={{ opacity: [0, 0.15, 0.85, 1, 1, 0], scale: [0.86, 0.9, 0.96, 1, 1, 0.98], y: [10, 8, 4, 0, 0, -2] }}
        transition={{ duration: doorDelay + doorDuration, times: [0, 0.2, 0.42, 0.58, 0.84, 1] }}
      >
        <div className="text-center px-6">
          <p className="text-brand-gold uppercase tracking-[0.28em] text-sm md:text-base mb-4">Welcome</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
            Kohinoor Doors
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-y-0 left-0 z-20 w-1/2 bg-gradient-to-br from-[#3b2a1d] via-[#24180f] to-[#120d09] border-r border-brand-gold/40"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: doorDuration, delay: doorDelay, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#d8b77b_0%,transparent_35%),linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />
        <div className="absolute top-8 left-6 right-6 bottom-8 border border-brand-gold/25 rounded-sm" />
        <div className="absolute top-16 left-12 right-12 bottom-16 border border-brand-gold/20 rounded-sm" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-36 md:w-44 opacity-95">
          <img
            src="/kohinoor-logo.png"
            alt="Kohinoor Doors Logo"
            className="w-full h-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-4 h-16 rounded-full bg-gradient-to-b from-brand-gold to-[#8b6a2e] shadow-[0_0_12px_rgba(212,175,55,0.35)]" />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 right-0 z-20 w-1/2 bg-gradient-to-bl from-[#3b2a1d] via-[#24180f] to-[#120d09] border-l border-brand-gold/40"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: doorDuration, delay: doorDelay, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#d8b77b_0%,transparent_35%),linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />
        <div className="absolute top-8 left-6 right-6 bottom-8 border border-brand-gold/25 rounded-sm" />
        <div className="absolute top-16 left-12 right-12 bottom-16 border border-brand-gold/20 rounded-sm" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-36 md:w-44 opacity-95">
          <img
            src="/kohinoor-logo.png"
            alt="Kohinoor Doors Logo"
            className="w-full h-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-4 h-16 rounded-full bg-gradient-to-b from-brand-gold to-[#8b6a2e] shadow-[0_0_12px_rgba(212,175,55,0.35)]" />
      </motion.div>

      <div className="absolute inset-y-0 left-1/2 z-10 w-px bg-brand-gold/20 -translate-x-1/2" />
    </motion.div>
  )
}
