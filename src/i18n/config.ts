import { trans } from './translations'
import type { Locale } from './types'

export const localesMap: Record<Locale, string> = {
  'es-mx': 'es-mx',
  en: 'en-gb',
  es: 'es-es'
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  'es-mx': 'Español - México'
}

export const locales = Object.keys(trans)

export const localeStrings = Object.values(localesMap)

export const defaultLocale: Locale = 'es'
