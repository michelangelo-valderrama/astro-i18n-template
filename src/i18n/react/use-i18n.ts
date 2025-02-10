import { useStore } from '@nanostores/react'

import { i18n, currentLocaleStore } from '@/i18n'

export function useI18n() {
  const currentLocale = useStore(currentLocaleStore)

  const t = i18n(currentLocale)

  return [t, { currentLocale }]
}
