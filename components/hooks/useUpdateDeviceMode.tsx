import { useEffect } from 'react'
import useDeviceModeStore from '@stores/useDeviceModeStore'
import useWindowDimensionsStore from '@stores/useWindowDimensionsStore'

export default function useUpdateDeviceMode() {
  const windowDimensions = useWindowDimensionsStore(
    (state) => state.windowDimensions
  )
  const setSmall = useDeviceModeStore((state) => state.setSmall)
  const setMedium = useDeviceModeStore((state) => state.setMedium)
  const setLarge = useDeviceModeStore((state) => state.setLarge)

  useEffect(() => {
    const width = windowDimensions.width

    const handleResize = () => {
      if (width < 768) {
        setSmall()
      } else if (768 <= width && width < 1024) {
        setMedium()
      } else if (width >= 1024) {
        setLarge()
      }
    }
    handleResize()
  }, [windowDimensions])

  return
}
