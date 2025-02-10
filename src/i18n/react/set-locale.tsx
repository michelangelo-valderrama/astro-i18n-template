import { currentLocaleStore, type Locale } from '@/i18n'

interface Props {
  currentLocale?: string
}

export default function SetLocale({ currentLocale }: Props) {
  currentLocaleStore.set(currentLocale as Locale)
}
