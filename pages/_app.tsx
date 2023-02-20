import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Head>
            <title>Yoldi Agency</title>
            <meta property="og:title" content="Yoldi Agency" key="title" />
        </Head>
        <Component {...pageProps} />
    </Layout>
)

export default App
