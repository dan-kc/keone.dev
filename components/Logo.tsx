import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useRect } from '@components/hooks/useRect'
import useNavbarStore from '@stores/useNavbarStore'
import Lottie from 'lottie-react'
import lottie from '@lib/lottie.json'
import useDeviceModeStore, { DeviceOptions } from '@stores/useDeviceModeStore'
import NewLink from './Link'

export default function Logo() {
  const [containerRect, containerRef] = useRect()
  const device = useDeviceModeStore((state) => state.device)
  const stick = useNavbarStore((state) => state.stick)
  const unstick = useNavbarStore((state) => state.unstick)
  const isSticky = useNavbarStore((state) => state.isSticky)
  const router = useRouter()
  const isHomepage = router.asPath === '/' ? true : false

  useEffect(() => {
    if (containerRect) {
      const top = containerRect.top
      if (device === DeviceOptions.Small) {
        if (top < -187) {
          stick()
        } else {
          unstick()
        }
      } else {
        if (top < -307) {
          stick()
        } else {
          unstick()
        }
      }
    }
  }, [containerRect, device, stick, unstick])

  useEffect(() => {
    if (isHomepage === false) {
      return
    }
    const el = document.querySelector(
      '#homepage-logo > svg > g > g:first-child'
    )

    if (isSticky === true) {
      el.classList.add('opacity-0')
      el.classList.remove('opacity-1')
      return
    }
    el.classList.add('opacity-1')
    el.classList.remove('opacity-0')
  }, [isSticky, router])

  return (
    <>
      <div
        ref={containerRef}
        className={classNames(
          isHomepage ? 'pt-44 md:pt-72' : 'h-[46px] lg:h-[50px]'
        )}
      />
      <div
        className={classNames(
          isHomepage ? 'sticky' : 'fixed',
          'z-20 pointer-events-none flex inset-x-0 justify-center md:justify-start -top-[10px] md:-top-[10px] lg:-top-[18px] md:pl-16 lg:pl-[80px] mx-auto max-w-[1320px]'
        )}
      >
        <div className='relative flex flex-col items-center md:items-baseline'>
          <NewLink
            mail={false}
            href='/'
            className='w-[180px] md:w-[190px] lg:w-[240px] pointer-events-auto'
          >
            <Lottie
              id={isHomepage ? 'homepage-logo' : 'logo'}
              animationData={lottie}
              loop={true}
            />
          </NewLink>
        </div>
      </div>
    </>
  )
}
