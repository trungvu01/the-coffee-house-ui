import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import React, { useRef } from 'react'

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
    const subMenu = document.querySelectorAll('.' + cx('has-child'))
    subMenu.forEach((li) => {
        const child = li.querySelector('& > ul')
        if (child) {
            li.addEventListener('mouseover', () => {
                child.classList.add(cx('show'))
            })
        }
    })

    const menuRef = useRef<HTMLUListElement>(null)
    if (menuRef.current) {
        const linkList = menuRef.current.querySelectorAll('a')
        linkList.forEach((link) => {
            link.addEventListener('click', () => {
                onHideMenu()
            })
        })
    }

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
