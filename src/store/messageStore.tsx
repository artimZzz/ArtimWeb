import type { MayNull } from '@/type/common'
import { create } from 'zustand'

const useMessageStore = create<Store>((set) => ({
  message: null,
  setMessage: (msg) => set({ message: msg }),
  clearMessage: () => set({ message: '' })
}))

type Store = {
  message: MayNull<string>
  setMessage: (msg: MayNull<string>) => void
  clearMessage: () => void
}

export default useMessageStore
