import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <title>Yoldi Agency</title>
            <meta property="og:title" content="Yoldi Agency" key="title" />
        </Head>
        <Component {...pageProps} />
    </Layout>
)

export default App
