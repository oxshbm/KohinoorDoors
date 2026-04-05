import React, { createContext, useContext, useState, ReactNode } from 'react'
import * as enTranslations from '@/translations/en'
import * as hiTranslations from '@/translations/hi'

type Language = 'en' | 'hi'

interface LanguageContextType {
  lang: Language
  t: (key: string) => string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const translations = lang === 'en' ? enTranslations : hiTranslations

  const t = (key: string): string => {
    return (translations as Record<string, string>)[key] || key
  }

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
