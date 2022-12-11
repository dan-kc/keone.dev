import type { AppProps } from 'next/app'
import '../styles/globals.css'
import useUpdateDeviceMode from '@components/hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@components/hooks/useUpdateWindowDimensions'
import { ToastProvider } from '@radix-ui/react-toast'
import Toast from '@components/Toast'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Outfit, Poppins } from '@next/font/google'
import Flyout from '@components/Flyout'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins',
})

function MyApp({ Component, pageProps }: AppProps) {
  useUpdateDeviceMode()
  useUpdateWindowDimensions()
  const router = useRouter()

  return (
    <ToastProvider swipeDirection='right'>
      <div
        className={classNames(router.asPath === '/' ? '' : 'overflow-hidden')}
      >
        <Flyout />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Toast />
      </div>
    </ToastProvider>
  )
}

export default MyApp
