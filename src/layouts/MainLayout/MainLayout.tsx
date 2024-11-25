import React from 'react'
import { Header, Footer } from '../../components'

type childrenType = {
    children: React.ReactNode
}

function MainLayout({ children }: childrenType) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
