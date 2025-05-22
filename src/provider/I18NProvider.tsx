import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export default async function I18NProvider(props: Props) {
  const { children, locale } = props

  const loadMessages = async () => {
    try {
      return (await import(`../text/${locale}.json`)).default
    } catch (error) {
      notFound()
    }
  }

  const messages = await loadMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

type Props = PropsWithChildren & {
  locale: string
}
