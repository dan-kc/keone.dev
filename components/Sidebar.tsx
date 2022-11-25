import { useEffect, useState } from 'react'
import Link from '@components/Link'
import { navigation } from '@components/Navbar'
import useDeviceModeStore, {
  DeviceOptions,
} from '@hooks/stores/useDeviceModeStore'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function Sidebar() {
  const device = useDeviceModeStore((state) => state.device)
  const [open, setOpen] = useState<boolean>()

  const router = useRouter()

  useEffect(() => {
    setOpen(false)
  }, [router.asPath])

  useEffect(() => {
    if (device !== DeviceOptions.Small) {
      setOpen(false)
    }
  }, [device])

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          aria-label='Menu'
          className='md:hidden hover:scale-110 text-white transform duration-100 outline-none'
        >
          <Bars3Icon className='h-9 w-9' aria-hidden='true' />
        </Dialog.Trigger>
        <AnimatePresence>
          {open ? (
            <Dialog.Portal className='relative' forceMount>
              <Dialog.Overlay asChild forceMount key='background'>
                <motion.div
                  className='fixed inset-0 bg-anthracite-1/90'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layoutId='background'
                >
                  <Dialog.Close className='inset-0' />
                </motion.div>
              </Dialog.Overlay>

              <Dialog.Content asChild forceMount key='menu'>
                <motion.div
                  className='fixed top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-3xl font-heading font-extrabold px-10 pt-4 pb-0 bg-anthracite-3 rounded-md'
                  initial={{ opacity: 0, left: '140%' }}
                  animate={{ opacity: 1, left: '50%' }}
                  exit={{ opacity: 0, left: '140%' }}
                  layoutId='menu'
                >
                  <VisuallyHidden.Root asChild>
                    <Dialog.Title>Menu</Dialog.Title>
                  </VisuallyHidden.Root>
                  <VisuallyHidden.Root>
                    <Dialog.Description>
                      Links to other pages and a link to contact me.
                    </Dialog.Description>
                  </VisuallyHidden.Root>
                  <Dialog.Close className='outline-none'>
                    <Cross2Icon className='absolute top-4 right-4 h-8 w-8 text-anthracite-12' />
                  </Dialog.Close>
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
                  <Dialog.Close className='bg-yellow-700'></Dialog.Close>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </>
  )
}
