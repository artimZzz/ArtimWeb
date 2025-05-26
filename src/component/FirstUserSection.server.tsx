'use server'

import { fetchData } from '@/api/user'
import { getTranslations } from 'next-intl/server'

export default async function FirstUserSection() {
  const users = await fetchData()

  const user = users[0]

  const t = await getTranslations()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t('home.first_user')}</h1>
      {user != null && (
        <div key={user.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>
      )}
    </div>
  )
}
