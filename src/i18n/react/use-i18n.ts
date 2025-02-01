import { useStore } from '@nanostores/react'

import { i18n } from '../utils'

import { currentLocaleStore } from '../store/current-locale'

export function useI18n() {
  const $lang = useStore(currentLocaleStore)

  const t = i18n($lang)
  return { t, currentLang: $lang }
}
