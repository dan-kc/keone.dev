import { useState, useRef, useEffect } from 'react'

const useEffectInEvent = (
  event: 'resize' | 'scroll',
  useCapture?: boolean,
  set?: () => void
) => {
  useEffect(() => {
    set()
    window.addEventListener(event, set, useCapture)
    return () => window.removeEventListener(event, set, useCapture)
  }, [])
}

export const useRect = () => {
  const ref = useRef(null)
  const [rect, setRect] = useState<any>()

  const set = () => setRect(ref.current?.getBoundingClientRect())

  useEffectInEvent('resize', false, set)
  useEffectInEvent('scroll', true, set)

  return [rect, ref]
}
