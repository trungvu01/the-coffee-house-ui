import React from 'react'
import { Header, Sidebar, Footer } from '../../components'

type childrenType = {
    children: React.ReactNode
}

function SidebarLayout({ children }: childrenType) {
    return (
        <>
            <Header />
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 d-none d-lg-inline-block'>
                            <Sidebar />
                        </div>
                        <div className='col-12 col-lg-9'>{children}</div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default SidebarLayout
