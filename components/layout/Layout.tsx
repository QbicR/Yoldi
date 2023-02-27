import React from 'react'
import { useRouter } from 'next/router'

import Footer from './footer/Footer'
import Header from './header/Header'

interface LayoutProps {
    children: JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { route } = useRouter()
    const isHide = route === '/login' || route === '/register'

    return (
        <>
            <Header />
            {children}
            {isHide && <Footer route={route} />}
        </>
    )
}

export default Layout
