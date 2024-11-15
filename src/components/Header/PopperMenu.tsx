import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

type dataItemType = {
    title: string
    path: string
    children?: dataItemType[]
}

type propType = {
    className: string
    data: dataItemType
    key?: number
    layout?: string
}

function PopperMenu({ className, data, layout }: propType) {
    return (
        <ul className={cx('menu-' + className)} style={{ gridTemplateColumns: layout }}>
            {data.children &&
                data.children.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path} className={cx('menu-item-' + className)}>
                            {item.title}
                        </Link>
                    </li>
                ))}
        </ul>
    )
}

export default PopperMenu
