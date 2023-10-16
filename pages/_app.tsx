import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/context/AuthContext'
import { config } from "@fortawesome/fontawesome-svg-core"
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return <AuthProvider><Layout><Component {...pageProps} /></Layout></AuthProvider>
}
