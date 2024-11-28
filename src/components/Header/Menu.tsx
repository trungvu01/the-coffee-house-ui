import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { useRef, useEffect } from 'react'

import styles from './Header.module.scss'
import { MoreIcon } from '../Icons'

const cx = classNames.bind(styles)

type dataItemType = {
    title: string
    path: string
    children?: dataItemType[]
}

type propType = {
    data: dataItemType[]
    onHideMenu: VoidFunction
}

const Menu = ({ data, onHideMenu }: propType) => {
    const menuRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const menuEle = menuRef.current

        if (!menuEle) return

        const subMenus = menuEle.querySelectorAll('.' + cx('has-child'))
        subMenus.forEach((li) => {
            const child = li.querySelector('ul')
            if (child) {
                li.addEventListener('mouseover', () => {
                    child.classList.add(cx('show'))
                })
            }
        })

        const links = menuEle.querySelectorAll('a')
        links.forEach((link) => {
            link.addEventListener('click', onHideMenu)
        })

        return () => {
            subMenus.forEach((li) => {
                const child = li.querySelector('ul')
                if (child) {
                    li.removeEventListener('mouseover', () => {
                        child.classList.add(cx('show'))
                    })
                }
            })

            links.forEach((link) => {
                link.removeEventListener('click', onHideMenu)
            })
        }
    }, [onHideMenu])

    return (
        <ul ref={menuRef} className={cx('menu-lv1')}>
            {data.map((item, index) => {
                return (
                    <li className={cx({ 'has-child': item.children })} key={index}>
                        <div className={cx({ wrapper: item.children })}>
                            <Link className={cx('menu-item-lv1')} to={item.path}>
                                {item.title}
                            </Link>
                            {item.children && <MoreIcon className={cx('more-icon')} />}
                        </div>

                        {
                            /* menu lv2 */
                            item.children && (
                                <ul className={cx('menu-lv2', `order-${index}`)}>
                                    {item.children.map((itemLv2, index) => {
                                        return (
                                            <li key={index}>
                                                <Link className={cx('menu-item-lv2')} to={itemLv2.path}>
                                                    <span>{itemLv2.title}</span>

                                                    {itemLv2.children && (
                                                        <ul className={cx('menu-lv3')}>
                                                            {itemLv2.children.map((itemLv3, index) => {
                                                                return (
                                                                    <li key={index}>
                                                                        <Link
                                                                            className={cx('menu-item-lv3')}
                                                                            to={itemLv3.path}
                                                                        >
                                                                            {itemLv3.title}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    )}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
