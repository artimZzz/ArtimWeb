import { API_DOMAIN, ApiPath } from '@/constant/api'
import { UserSchema } from '@/schema/user'
import type { User } from '@/type/user'
import type { UseSuspenseQueryOptions } from '@tanstack/react-query'

export const API_GET_USER: UseSuspenseQueryOptions<User[]> = {
  queryKey: [ApiPath.User],
  queryFn: async function fetchData() {
    const apiURL = `${API_DOMAIN}${ApiPath.User}`

    const response = await fetch(apiURL)

    const responseJson = await response.json()

    const parsedData = responseJson.map(UserSchema.parse)

    return parsedData
  },
  staleTime: 1000 * 60, // 1 minute
  gcTime: 1000 * 60 * 5 // 5 minutes
}
