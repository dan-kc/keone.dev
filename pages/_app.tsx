import type { AppProps } from 'next/app'
import '../styles/globals.css'
import useUpdateDeviceMode from '@components/hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@components/hooks/useUpdateWindowDimensions'
import { ToastProvider } from '@radix-ui/react-toast'
import Toast from '@components/Toast'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Outfit, Poppins } from '@next/font/google'

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
  return (
    <ToastProvider swipeDirection='right'>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Toast />
    </ToastProvider>
  )
}

export default MyApp
