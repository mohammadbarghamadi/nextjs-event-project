import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/context/AuthContext'
import { config } from "@fortawesome/fontawesome-svg-core"
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from '@/components/layout'
import Head from 'next/head'
import Footer from '@/components/layout/footer'
import { NotifyProvider } from '@/context/NotifyContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Head>
          <title>رویداد سیستم</title>
          <meta name='viewport' content='initial-scale=1.0 width:device-width' />
        </Head>
        <NotifyProvider>
          <Component {...pageProps} />
        </NotifyProvider>
        <Footer />
      </Layout>
    </AuthProvider>
  )
}
