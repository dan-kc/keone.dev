import useUpdateDeviceMode from '@hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions'
import Link from '@components/Link'
import Lottie from 'lottie-react'
import lottie from '@lib/lottie.json'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import useFlyoutStore from './hooks/stores/useFlyoutStore'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export const navigation = [
  {
    name: 'Home',
    href: '/',
    colorClassName:
      'bg-redDark-3/20  border-redDark-6  text-redDark-9',
  },
  {
    name: 'Profile',
    href: '/profile',
    colorClassName:
      'bg-violetDark-3/20 border-violetDark-6 text-violetDark-9',

  },
  {
    name: 'Products',
    href: '/products',
    colorClassName:
      'bg-greenDark-3/20  border-greenDark-6  text-greenDark-9',
  },
  {
    name: 'Projects',
    href: '/projects',
    colorClassName:
      'bg-orangeDark-3/20  border-orangeDark-6 text-orangeDark-9',
  },
  {
    name: 'Process',
    href: '/process',
    colorClassName:
      'bg-skyDark-3/20  border-skyDark-6 text-skyDark-9',
  },
]

export const generateClassName = (path: string) => {
  let colorClassName: string
  navigation.forEach((item) => {
    if (item.href === path) {
      colorClassName = item.colorClassName
    }
  })
  return { colorClassName }
}

export default function Navbar() {
  // Initialization Stuff
  useUpdateDeviceMode()
  useUpdateWindowDimensions()

  const setOpen = useFlyoutStore((state) => state.setOpen)
  const { asPath } = useRouter()
  const { colorClassName } = generateClassName(asPath)

  return (
    <div className='max-w-3xl lg:max-w-5xl xl:max-w-7xl px-5 md:px-10 relative sm:mx-auto'>
      <NavigationMenu.Root className='flex justify-between items-center py-1 text-sm text-base z-20 font-display'>
        <Link
          aria-label='Home'
          href='/'
          className='mt-[6.4px] md:mt-[5.76px] w-44 lg:w-48 pointer-events-auto'
        >
          <Lottie animationData={lottie} loop={true} />
        </Link>

        <button
          aria-label='Menu'
          onClick={() => setOpen(true)}
          className='md:hidden hover:scale-110 transform duration-100 outline-none'
        >
          <HamburgerMenuIcon className='h-8 w-8' aria-hidden='true' />
        </button>

        <div className='hidden md:block'>
          <NavigationMenu.List className='flex gap-2'>
            {navigation.map((item, index) => {
              if (item.href === '/') {
                return
              }
              const isActive = asPath === item.href
              return (
                <NavigationMenu.Item
                  className='flex flex-col justify-center mt-1'
                  key={index}
                >
                  <Link href={item.href} passHref legacyBehavior>
                    <NavigationMenu.Link
                      active={isActive}
                      className={classNames(
                        isActive
                          ? ''
                          : 'border-transparent hover:border-b-grayDark-5',
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
                className={classNames(
                  'font-heading font-extrabold ml-1 border py-2 px-4 rounded-md shadow-lg duration-200',
                  colorClassName
                )}
              >
                Contact
              </Link>
            </li>
          </NavigationMenu.List>
        </div>
      </NavigationMenu.Root>
    </div>
  )
}
