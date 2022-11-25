import { useEffect } from 'react'
import Link from '@components/Link'
import { navigation } from '@components/Navbar'
import useDeviceModeStore, {
  DeviceOptions,
} from '@hooks/stores/useDeviceModeStore'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Cross2Icon } from '@radix-ui/react-icons'
import useFlyoutStore from './hooks/stores/useFlyoutStore'
import disableScroll from 'disable-scroll'

export default function Flyout() {
  const device = useDeviceModeStore((state) => state.device)
  const setOpen = useFlyoutStore((state) => state.setOpen)
  const open = useFlyoutStore((state) => state.open)
  const router = useRouter()

  useEffect(() => {
    setOpen(false)
  }, [router.asPath])

  useEffect(() => {
    if (device !== DeviceOptions.Small) {
      setOpen(false)
    }
  }, [device])

  useEffect(() => {
    if (open === true) {
      disableScroll.on()
    } else if (open === false) {
      disableScroll.off()
    }
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className='fixed inset-0 bg-anthracite-1/90 z-40'
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId='background'
          ></motion.div>

          <motion.div
            className='fixed top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-3xl font-heading font-extrabold px-10 py-8  bg-anthracite-3 rounded-md'
            initial={{ opacity: 0, left: '140%' }}
            animate={{ opacity: 1, left: '50%' }}
            exit={{ opacity: 0, left: '140%' }}
            layoutId='menu'
          >
            <button className='outline-none' onClick={() => setOpen(false)}>
              <Cross2Icon className='absolute top-4 right-4 h-8 w-8 text-anthracite-12' />
            </button>
            <ul className='flex flex-col gap-2'>
              <li className='p-1'>
                {router.asPath === '/' ? (
                  <button
                    className='text-anthracite-12 px-2 underline'
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </button>
                ) : (
                  <Link
                    mail={false}
                    href='/'
                    aria-label='Home'
                    className='text-anthracite-12 p-2 underline'
                  >
                    Home
                  </Link>
                )}
              </li>
              {navigation.map((item, index) => {
                const isActive = router.asPath === item.href
                return (
                  <li className='p-1' key={index}>
                    {isActive ? (
                      <button
                        className='text-anthracite-12 px-2 underline'
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        mail={false}
                        href={item.href}
                        aria-label={item.name}
                        className='text-anthracite-12 p-2 underline'
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                )
              })}
              <li className='p-1 mt-10 flex justify-center'>
                <Link
                  mail={true}
                  aria-label='Contact'
                  className='ml-1 border py-2 px-4 bg-rose-900/20 border-rose-900 hover:border-rose-600 text-rose-600 hover:text-rose-500 rounded-md shadow-2xl duration-100'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
