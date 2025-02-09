'use client'

import {
  defaultLocale,
  splitUrl,
  localeNames,
  verifyLocaleString
} from '@/i18n'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from '@/icons'

interface Props {
  url: URL
}

export default function LocaleSelector({ url }: Props) {
  const { locale, rest } = splitUrl(url)
  const currentLocale = verifyLocaleString(locale) ?? defaultLocale

  const goTo = (l: string) => {
    window.location.href = `${origin}/${l}/${rest}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ps-3 pe-4">
          <ChevronDown className="me-1" />
          {localeNames[currentLocale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="end">
        <DropdownMenuRadioGroup value={locale} onValueChange={goTo}>
          {Object.entries(localeNames).map(([localeKey, localeName]) => (
            <DropdownMenuRadioItem key={localeKey} value={localeKey}>
              {localeName}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
