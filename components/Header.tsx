import Logo from '@components/Logo'
import useUpdateDeviceMode from '@hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import Sidebar from '@components/Sidebar'
import Link from '@components/Link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export const navigation = [
  { name: 'Profile', href: '/profile' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/projects' },
  { name: 'Process', href: '/process' },
]

export default function Header() {
  // Initialization Stuff
  useUpdateDeviceMode()
  useUpdateWindowDimensions()

  return (
    <>
      <header className='fixed top-0 inset-0'>
        {/* <NavigationMenu.Root> */}
        {/*   <NavigationMenu.List> */}
        {/*     <NavigationMenu.Item> */}
        {/*       <NavigationMenu.Link > */}
        {/*         <Link href='/' mail> */}
        {/*           Yeah */}
        {/*         </Link> */}
        {/*       </NavigationMenu.Link> */}
        {/*     </NavigationMenu.Item> */}
        {/**/}
        {/*   </NavigationMenu.List> */}
        {/* </NavigationMenu.Root> */}
      </header>
    </>
  )
}
