import { useEffect } from 'react'
import Link from '@components/Link'
import { navigation } from '@components/Header'
import useNavbarStore from '@stores/useNavbarStore'
import useDeviceModeStore, {
  DeviceOptions,
} from '@hooks/stores/useDeviceModeStore'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

export default function Sidebar() {
  const closeSidebar = useNavbarStore((state) => state.closeSidebar)
  const device = useDeviceModeStore((state) => state.device)
  const open = useNavbarStore((state) => state.isOpen)
  const toggleSidebar = useNavbarStore((state) => state.toggleSidebar)

  const router = useRouter()

  useEffect(() => {
    closeSidebar()
  }, [router.asPath])

  useEffect(() => {
    if (device !== DeviceOptions.Small) {
      closeSidebar()
    }
  }, [device])

  return (
    <>
      <Dialog.Root open={open} onOpenChange={toggleSidebar}>
        <Dialog.Trigger className='absolute w-10 h-10 top-1 left-2 md:hidden hover:scale-110 text-white transform duration-100'>
          <Bars3Icon className='h-10 w-10' aria-hidden='true' />
        </Dialog.Trigger>

        <AnimatePresence>
          {open ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className='fixed z-20 inset-0 bg-green-7'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                >
                  <Dialog.Close className='inset-0' />
                </motion.div>
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  className='fixed top-0 left-0 z-30'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                >
                  <VisuallyHidden.Root asChild>
                    <Dialog.Title>Menu</Dialog.Title>
                  </VisuallyHidden.Root>
                  <VisuallyHidden.Root>
                    <Dialog.Description>
                      Links to other pages and a link to contact me.
                    </Dialog.Description>
                  </VisuallyHidden.Root>
                  <ul className='bg-green-7'>
                    {navigation.map((item, index) => (
                      <li className='' key={index}>
                        <Link mail={false} href={item.href} className=''>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Dialog.Close />
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </>
  )
}
