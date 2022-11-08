import create from 'zustand'

export enum DeviceOptions {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

interface Store {
  device: DeviceOptions
  isShort: boolean
  setSmall: () => void
  setMedium: () => void
  setLarge: () => void
  setIsShort: (input) => void
}

const useDeviceModeStore = create<Store>((set) => ({
  device: DeviceOptions.Small,
  isShort: false,
  setSmall: () => set({ device: DeviceOptions.Small }),
  setMedium: () => set({ device: DeviceOptions.Medium }),
  setLarge: () => set({ device: DeviceOptions.Large }),
  setIsShort: (input: boolean) => set({ isShort: input }),
}))

export default useDeviceModeStore
