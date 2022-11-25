import create from 'zustand'

export enum DeviceOptions {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

interface Store {
  device: DeviceOptions
  setSmall: () => void
  setMedium: () => void
  setLarge: () => void
}

const useDeviceModeStore = create<Store>((set) => ({
  device: DeviceOptions.Small,
  setSmall: () => set({ device: DeviceOptions.Small }),
  setMedium: () => set({ device: DeviceOptions.Medium }),
  setLarge: () => set({ device: DeviceOptions.Large }),
}))

export default useDeviceModeStore
