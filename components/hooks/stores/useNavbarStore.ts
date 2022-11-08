import create from 'zustand'

interface Store {
  isOpen: boolean
  isSticky: boolean
  closeSidebar: () => void
  openSidebar: () => void
  toggleSidebar: () => void
  toggleSticky: () => void
  stick: () => void
  unstick: () => void
}

const useNavbarStore = create<Store>((set) => ({
  isOpen: false,
  isSticky: false,
  closeSidebar: () => set({ isOpen: false }),
  openSidebar: () => set({ isOpen: true }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleSticky: () => set((state) => ({ isSticky: !state.isSticky })),
  stick: () => set({ isSticky: true }),
  unstick: () => set({ isSticky: false }),
}))

export default useNavbarStore
