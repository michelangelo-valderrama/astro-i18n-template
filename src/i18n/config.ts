import { trans } from './translations'
import type { Locale } from './types'

/**
 * A map with the locales and their names
 *
 * **Example**
 * ```ts
 * {
 *  en: 'English',
 *  es: 'Español',
 *  'es-mx': 'Español - México'
 * }
 * ```
 */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  'es-mx': 'Español - México'
}

/**
 * All locales avaible in BCP 47 format.
 *
 * **Example**
 * ```ts
 * ['en', 'es', 'es-mx']
 * ```
 */
export const locales = Object.keys(trans)

/**
 * The default locale.
 */
export const defaultLocale: Locale = 'es'
