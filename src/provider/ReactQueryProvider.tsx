'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren, useMemo } from 'react'

export default function ReactQueryProvider(props: Props) {
  const { children } = props

  const queryClient = useMemo(() => {
    return new QueryClient()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

type Props = PropsWithChildren
