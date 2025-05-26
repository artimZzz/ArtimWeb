'use client'

import useMessageStore from '@/store/messageStore'
import { useTranslations } from 'next-intl'

export default function OpenMessageButton() {
  const t = useTranslations()

  const { setMessage } = useMessageStore()

  const handleClick = async () => {
    setMessage(t('popup.hello_world'))
  }

  return (
    <button
      className="cursor-pointer rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
      type="button"
      onClick={handleClick}
    >
      {t('home.show_popup')}
    </button>
  )
}
