import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

type buttonPropType = {
    href?: string
    to?: string
    children: React.ReactElement | string | React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    className?: string | number | symbol | any
    primary?: boolean
    outline?: boolean
    rounded?: boolean
}

type propsType = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    to?: string
    href?: string
}

function Button({ href, to, children, onClick, className, primary, outline, rounded, ...passProps }: buttonPropType) {
    let Comp: string | React.ElementType = 'button'

    const props: propsType = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded
    })

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button
