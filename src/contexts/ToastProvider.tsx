import classNames from 'classnames/bind'
import React, { createContext, useState } from 'react'

import styles from './ToastProvider.module.scss'
import { Toast } from '../components'

const cx = classNames.bind(styles)

type toastType = {
    id: number
    type: string
    message: string
}

type propType = {
    children: React.ReactNode
}

const ToastContext = createContext<((type: string, message: string, duration: number) => void) | undefined>(undefined)

const ToastProvider = ({ children }: propType) => {
    const [toastList, setToastList] = useState<toastType[] | []>([])

    const addToast = (type: string, message: string, duration: number = 3010) => {
        const newToast: toastType = {
            id: Date.now(),
            type,
            message
        }
        setToastList((prev) => [...prev, newToast])

        setTimeout(
            () => {
                setToastList((prev) => prev.filter((toast) => toast.id !== newToast.id))
            },
            duration * (toastList.length + 1)
        )
    }

    return (
        <ToastContext.Provider value={addToast}>
            <div className={cx('toast-container')}>
                {toastList.map((toast) => {
                    return <Toast type={toast.type} message={toast.message} key={toast.id} />
                })}
            </div>
            {children}
        </ToastContext.Provider>
    )
}

export { ToastProvider, ToastContext }
