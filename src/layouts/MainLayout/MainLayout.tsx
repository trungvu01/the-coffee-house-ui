import React from 'react'
import classNames from 'classnames/bind'
import { Header, Footer } from '../../components'

import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

type childrenType = {
    children: React.ReactNode
}

function MainLayout({ children }: childrenType) {
    return (
        <>
            <Header />
            <main className={cx('body')}>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
