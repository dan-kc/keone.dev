import type { AppProps } from 'next/app'
import '../styles/globals.css'
import useUpdateDeviceMode from '@components/hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@components/hooks/useUpdateWindowDimensions'
import { ToastProvider } from '@radix-ui/react-toast'
import Toast from '@components/Toast'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Outfit, Montserrat } from '@next/font/google'
import Flyout from '@components/Flyout'

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

function MyApp({ Component, pageProps }: AppProps) {
  useUpdateDeviceMode()
  useUpdateWindowDimensions()

  return (
    <ToastProvider swipeDirection='right'>
      <Flyout />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Toast />
    </ToastProvider>
  )
}

export default MyApp
