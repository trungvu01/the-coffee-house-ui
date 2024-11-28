import classNames from 'classnames/bind'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './Sidebar.module.scss'
import services from '../../services'

const cx = classNames.bind(styles)

const SIDEBAR_LIST = services.menuService.find((item) => item.title === 'Menu')?.children

function Sidebar() {
    const { type } = useParams()

    const cateActive = SIDEBAR_LIST?.find((cate) =>
        cate?.children?.some((child) => child.path === '/collections/' + type)
    )

    useEffect(() => {
        const handleClick = (event: Event) => {
            const target = event.target as HTMLElement

            const listItem = target.closest('.' + cx('has-child')) as HTMLElement | null
            if (listItem) {
                const child = listItem.querySelector('ul')
                if (child) {
                    child.classList.add(cx('show'))
                }
            }
        }

        const sidebarMenu = document.querySelector('.' + cx('sidebar')) // Giới hạn phạm vi
        if (sidebarMenu) {
            sidebarMenu.addEventListener('click', handleClick)
        }

        return () => {
            if (sidebarMenu) {
                sidebarMenu.removeEventListener('click', handleClick)
            }
        }
    }, [])

    return (
        <aside className={cx('sidebar')}>
            <ul className={cx('sidebar-list')}>
                {SIDEBAR_LIST?.map((item, index) => {
                    return (
                        <li key={index} className={cx({ 'has-child': item.children })}>
                            <Link
                                className={cx('sidebar-item', {
                                    active: '/collections/' + type === item.path || cateActive?.path === item.path
                                })}
                                to={item.path}
                            >
                                {item.title}
                            </Link>

                            {item.children && (
                                <ul className={cx('sidebar-child')}>
                                    {item.children.map((itemChild, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    className={cx('sidebar-child-item', {
                                                        active: '/collections/' + type === itemChild.path
                                                    })}
                                                    to={itemChild.path}
                                                >
                                                    {itemChild.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
