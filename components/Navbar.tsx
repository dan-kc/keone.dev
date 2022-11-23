import useUpdateDeviceMode from '@hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions'
import Sidebar from '@components/Sidebar'
import Link from '@components/Link'
import Container, { Options } from '@components/Container'
import Lottie from 'lottie-react'
import lottie from '@lib/lottie.json'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export const navigation = [
  { name: 'Profile', href: '/profile' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/projects' },
  { name: 'Process', href: '/process' },
]

export default function Navbar() {
  // Initialization Stuff
  useUpdateDeviceMode()
  useUpdateWindowDimensions()
  const router = useRouter()

  return (
    <Container size={Options.lg}>
      <NavigationMenu.Root className='flex justify-between items-center py-1 text-sm text-base'>
        <Link
          aria-label='Home'
          href='/'
          className='mt-[6.4px] md:mt-[5.76px] w-44 lg:w-48 pointer-events-auto'
        >
          <Lottie animationData={lottie} loop={true} />
        </Link>
        <Sidebar />
        <div className='hidden md:block'>
          <NavigationMenu.List className='flex gap-2'>
            {navigation.map((item, index) => {
              const isActive = router.asPath === item.href
              return (
                <NavigationMenu.Item
                  className='flex flex-col justify-center mt-1'
                  key={index}
                >
                  <Link mail={false} href={item.href} passHref legacyBehavior>
                    <NavigationMenu.Link
                      active={isActive}
                      className={classNames(
                        isActive
                          ? ''
                          : 'border-transparent hover:border-b-anthracite-6',
                        'border-b-2 text-white transition duration-200 p-2'
                      )}
                    >
                      {item.name}
                    </NavigationMenu.Link>
                  </Link>
                </NavigationMenu.Item>
              )
            })}
            <li className='flex flex-col justify-center mt-1'>
              <Link
                mail={true}
                className='font-heading font-extrabold ml-1 border py-2 px-4 bg-rose-900/20 border-rose-900 hover:border-rose-600 text-rose-600 hover:text-rose-500 rounded-md shadow-2xl duration-100'
              >
                Contact
              </Link>
            </li>
          </NavigationMenu.List>
        </div>
      </NavigationMenu.Root>
    </Container>
  )
}
