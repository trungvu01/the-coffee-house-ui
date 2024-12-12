import React from 'react'
import classNames from 'classnames/bind'

import styles from './PopperWrapper.module.scss'

const cx = classNames.bind(styles)

type propsType = {
    children: React.ReactElement
}

const PopperWrapper = ({ children }: propsType) => {
    return <div className={cx('wrapper')}>{children}</div>
}

export default PopperWrapper
