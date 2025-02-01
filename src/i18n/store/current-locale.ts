import { atom } from 'nanostores'

import type { Locale } from '../types'

export const currentLocaleStore = atom<Locale | undefined | null>(null)
