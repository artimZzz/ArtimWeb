import type { UserSchema } from '@/schema/user'
import type z from 'zod'

export type User = z.infer<typeof UserSchema>
