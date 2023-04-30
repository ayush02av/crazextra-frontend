import '@/styles/globals.css'
import Header from '@/components/common/header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
