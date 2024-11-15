import React from 'react'
import classNames from 'classnames/bind'
import { Header, Sidebar, Footer } from '../../components'

import styles from './SidebarLayout.module.scss'

const cx = classNames.bind(styles)

type childrenType = {
    children: React.ReactNode
}

function SidebarLayout({ children }: childrenType) {
    return (
        <>
            <Header />
            <main className={cx('body')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </main>
            <Footer />
        </>
    )
}

export default SidebarLayout
