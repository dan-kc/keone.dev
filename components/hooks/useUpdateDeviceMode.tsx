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
  const setIsShort = useDeviceModeStore((state) => state.setIsShort)

  useEffect(() => {
    const width = windowDimensions.width
    const height = windowDimensions.height

    const handleResize = () => {
      if (width < 768) {
        setSmall()
        if (height < 500) {
          setIsShort(true)
        } else {
          setIsShort(false)
        }
      } else if (768 <= width && width < 1024) {
        setMedium()
      } else if (width >= 1024) {
        setLarge()
      }
      if (height < 500) {
      }
    }
    handleResize()
  }, [windowDimensions])

  return
}
