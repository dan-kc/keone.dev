import useUpdateDeviceMode from '@hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions'
import Link from '@components/Link'
import Lottie from 'lottie-react'
import lottie from '@lib/lottie.json'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Bars3Icon } from '@heroicons/react/24/outline'
import useFlyoutStore from './hooks/stores/useFlyoutStore'

export const navigation = [
  { name: 'Profile', href: '/profile' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/projects' },
  { name: 'Process', href: '/process' },
]

const colorClassNames = {
  red: 'bg-redDark-3/20 hover:bg-redDark-4/20 border-redDark-6 hover:border-redDark-8 text-redDark-9',
  violet:
    'bg-violetDark-3/20 hover:bg-violetDark-4/20 border-violetDark-6 hover:border-violetDark-8 text-violetDark-9',
  crimson:
    'bg-crimsonDark-3/20 hover:bg-crimsonDark-4/20 border-crimsonDark-6 hover:border-crimsonDark-8 text-crimsonDark-9',
  tomato: 'bg-tomatoDark-3/20 hover:bg-tomatoDark-4/20 border-tomatoDark-6 hover:border-tomatoDark-8 text-tomatoDark-9',
  purple: 'bg-purpleDark-3/20 hover:bg-purpleDark-4/20 border-purpleDark-6 hover:border-purpleDark-8 text-purpleDark-9',
}

const generateClassName = (path: string) => {
  let headerClass: string, buttonClass: string

  if (path === '/') {
    headerClass = colorClassNames.red
  } else if (path === '/profile') {
    headerClass = colorClassNames.violet
  } else if (path === '/products') {
    headerClass = colorClassNames.tomato
  } else if (path === '/projects') {
    headerClass = colorClassNames.crimson
  } else if (path === '/process') {
    headerClass = colorClassNames.purple
  }
  return { headerClass, buttonClass }
}

export default function Navbar() {
  // Initialization Stuff
  useUpdateDeviceMode()
  useUpdateWindowDimensions()

  const setOpen = useFlyoutStore((state) => state.setOpen)
  const { asPath } = useRouter()
  const { headerClass } = generateClassName(asPath)

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
          <Bars3Icon className='h-9 w-9' aria-hidden='true' />
        </button>

        <div className='hidden md:block'>
          <NavigationMenu.List className='flex gap-2'>
            {navigation.map((item, index) => {
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
                  headerClass
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
