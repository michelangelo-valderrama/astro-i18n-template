import { atom } from 'nanostores'

import type { Locale } from '@/i18n/types'

export const currentLocaleStore = atom<Locale | undefined | null>(null)
