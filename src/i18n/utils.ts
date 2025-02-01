import { trans } from './translations'
import { defaultLocale, locales } from './config'
import type { Locale } from './types'

/**
 * Returns the translation object for the specified language.
 * @param locale - Language to use.
 * @returns Returns the translation object.
 *
 * @example
 * ```ts
 * i18n('es').home.title // Inicio
 * i18n('en').home.title // Home
 * ```
 */
export const i18n = (locale?: Locale | string | undefined | null) => {
  if (locale && locales.includes(locale)) return trans[locale as Locale]
  return trans[defaultLocale]
}

/**
 * Replace text with values.
 * @param text - Text to replace.
 * @param values - Values to replace.
 * @returns Returns the text with the values replaced.
 *
 * @example
 * ```ts
 * replTransText('Hello, {{name}}!', { name: 'John' }) // Hello, John!
 * ```
 */
export function replTransText(text: string, values: Record<string, string>) {
  return text.replace(/\{{(\w+)\}}/g, (_, key) => values[key] ?? '')
}

export function splitUrl(url: URL) {
  const [, locale, ...slug] = url.pathname.split('/')

  return {
    locale,
    rest: slug.join('/')
  }
}

export function verifyLocaleString(
  locale: string | undefined | null
): Locale | undefined {
  if (!locale) return undefined
  if (locales.includes(locale)) return locale as Locale
}
