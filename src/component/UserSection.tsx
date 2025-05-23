import { API_GET_USER } from '@/api/user'
import Skeleton from '@/component/Skeleton'
import type { User } from '@/type/user'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { useTranslations } from 'use-intl'

function UserList() {
  const { data: users } = useSuspenseQuery<User[]>({
    ...API_GET_USER
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users?.map((user: { id: number; name: string }) => (
        <div key={user.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default function UserSection() {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t('home.user_list')}</h1>
      <Suspense
        fallback={
          <Skeleton baseColor="#202020" highlightColor="#444" width={200} />
        }
      >
        <UserList />
      </Suspense>
    </div>
  )
}
