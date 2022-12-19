import { useEffect } from 'react'
import Link from '@components/Link'
import { navigation } from '@components/Navbar'
import useDeviceModeStore from '@hooks/stores/useDeviceModeStore'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Cross2Icon } from '@radix-ui/react-icons'
import useFlyoutStore from './hooks/stores/useFlyoutStore'
import disableScroll from 'disable-scroll'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function Flyout() {
  const device = useDeviceModeStore((state) => state.device)
  const setOpen = useFlyoutStore((state) => state.setOpen)
  const open = useFlyoutStore((state) => state.open)
  const router = useRouter()

  useEffect(() => {
    setOpen(false)
  }, [router.asPath])

  useEffect(() => {
    if (device !== 'Small') {
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
            className='fixed inset-0 bg-grayDark-3/90 z-40'
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId='background'
          ></motion.div>

          <NavigationMenu.Root asChild>
            <motion.div
              className='fixed top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-3xl font-heading font-bold px-10 py-8 bg-mauveDark-3 rounded-lg border border-mauveDark-6'
              initial={{ opacity: 0, left: '140%' }}
              animate={{ opacity: 1, left: '50%' }}
              exit={{ opacity: 0, left: '140%' }}
              layoutId='menu'
            >
              <button className='outline-none' onClick={() => setOpen(false)}>
                <Cross2Icon className='absolute top-6 left-5 h-9 w-9 ' />
              </button>
              <NavigationMenu.List className='flex flex-col gap-2'>
                <NavigationMenu.Item className='p-1'>
                  {router.asPath === '/' ? (
                    <button
                      className='text-anthracite-12 px-2 '
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </button>
                  ) : (
                    <Link
                      mail={false}
                      href='/'
                      passHref
                      legacyBehavior
                      aria-label='Home'
                    >
                      <NavigationMenu.Link className='p-2'>
                        Home
                      </NavigationMenu.Link>
                    </Link>
                  )}
                </NavigationMenu.Item>
                {navigation.map((item, index) => {
                  const isActive = router.asPath === item.href
                  return (
                    <NavigationMenu.Item className='p-1' key={index}>
                      {isActive ? (
                        <button
                          className='text-anthracite-12 px-2 '
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          mail={false}
                          href={item.href}
                          legacyBehavior
                          passHref
                          aria-label={item.name}
                        >
                          <NavigationMenu.Link className='p-2'>
                            {item.name}
                          </NavigationMenu.Link>
                        </Link>
                      )}
                    </NavigationMenu.Item>
                  )
                })}
                <li className='p-1 mt-6 flex justify-center'>
                  <Link
                    mail={true}
                    aria-label='Contact'
                    className='ml-1 border py-2 px-4 bg-redDark-3/20 hover:bg-redDark-4/20 border-redDark-6 hover:border-redDark-8 text-redDark-9 rounded-md shadow-2xl duration-100'
                  >
                    Contact
                  </Link>
                </li>
              </NavigationMenu.List>
            </motion.div>
          </NavigationMenu.Root>
        </>
      ) : null}
    </AnimatePresence>
  )
}
