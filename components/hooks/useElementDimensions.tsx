import { useState, useEffect, useRef } from 'react'
import useWindowDimensionsStore from '@hooks/stores/useWindowDimensionsStore'

export default function useElementDimensions() {
  const ref = useRef<HTMLElement>(null)

  const [elementHeight, setElementHeight] = useState<number>(0)
  const [elementWidth, setElementWidth] = useState<number>(0)
  const { width, height } = useWindowDimensionsStore(
    (state) => state.windowDimensions
  )

  useEffect(() => {
    const rectObj = ref?.current?.getBoundingClientRect()
    setElementHeight(rectObj?.height)
    setElementWidth(rectObj?.width)
  }, [width, height])

  return { ref: ref, elementHeight: elementHeight, elementWidth: elementWidth }
}
