import { currentLocaleStore } from '@/i18n/store/current-locale'
import type { Locale } from '../types'

interface Props {
  currentLocale?: string
}

export default function SetLocale({ currentLocale }: Props) {
  currentLocaleStore.set(currentLocale as Locale)
}
