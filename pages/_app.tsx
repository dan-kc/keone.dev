import '../styles/globals.css'
import useUpdateDeviceMode from '@components/hooks/useUpdateDeviceMode'
import useUpdateWindowDimensions from '@components/hooks/useUpdateWindowDimensions'
import { ToastProvider } from '@radix-ui/react-toast'
import Toast from '@components/Toast'

function MyApp({ Component, pageProps }) {
  useUpdateDeviceMode()
  useUpdateWindowDimensions()
  return (
    <ToastProvider swipeDirection='right'>
      <Component {...pageProps} />
      <Toast />
    </ToastProvider>
  )
}

export default MyApp
