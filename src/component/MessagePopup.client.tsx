'use client'

import useMessageStore from '@/store/messageStore'

export default function MessagePopup() {
  const { message, clearMessage } = useMessageStore()

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-transform duration-300 ${
        message ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow-lg">
        {message}
        <button
          className="cursor-pointer ml-4 text-sm text-blue-500 hover:underline"
          type="button"
          onClick={clearMessage}
        >
          Close
        </button>
      </div>
    </div>
  )
}
