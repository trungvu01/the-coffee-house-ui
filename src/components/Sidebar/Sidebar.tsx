import classNames from 'classnames/bind'
import { useParams } from 'react-router-dom'

import styles from './Sidebar.module.scss'
import services from '../../services'
import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

const SIDEBAR_LIST = services.menuService.find((item) => item.title === 'Menu')?.children

function Sidebar() {
    const { type } = useParams()

    setTimeout(() => {
        const menuItems = document.querySelectorAll('.' + cx('has-child'))
        menuItems.forEach((li) => {
            li.addEventListener('click', () => {
                const child = li.querySelector('& > ul')
                if (child) {
                    child.classList.add(cx('show'))
                }
            })
        })
    }, 100)

    return (
        <aside className={cx('sidebar')}>
            <ul className={cx('sidebar-list')}>
                {SIDEBAR_LIST?.map((item, index) => {
                    return (
                        <li key={index} className={cx({ 'has-child': item.children })}>
                            <NavLink
                                className={({ isActive }) =>
                                    cx('sidebar-item', {
                                        active: isActive && '/collections/' + type === item.path
                                    })
                                }
                                to={item.path}
                            >
                                {item.title}
                            </NavLink>

                            {item.children && (
                                <ul className={cx('sidebar-child')}>
                                    {item.children.map((itemChild, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        cx('sidebar-child-item', {
                                                            active:
                                                                isActive && '/collections/' + type === itemChild.path
                                                        })
                                                    }
                                                    to={itemChild.path}
                                                >
                                                    {itemChild.title}
                                                </NavLink>
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
