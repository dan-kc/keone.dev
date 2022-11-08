import { useState, useEffect } from 'react'
import useWindowDimensionsStore from '@stores/useWindowDimensionsStore'

export default function useUpdateWindowDimensions() {
  const setWindowDimensions = useWindowDimensionsStore(
    (state) => state.setWindowDimensions
  )

  useEffect(() => {
    const set = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setWindowDimensions({ width: width, height: height })
    }
    set()
    window.addEventListener('resize', set)

    return () => {
      window.removeEventListener('resize', set)
    }
  }, [])

  return
}
