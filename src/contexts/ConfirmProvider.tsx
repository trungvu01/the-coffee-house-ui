import classNames from 'classnames/bind'
import React, { createContext, useState } from 'react'

import styles from './ConfirmProvider.module.scss'
import images from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components'

const cx = classNames.bind(styles)

type optionsConfirm = {
    message: string
    onConfirm: () => void
}

type confirmContextType = {
    handleShow: (options: optionsConfirm) => void
}

const ConfirmContext = createContext<confirmContextType | undefined>(undefined)

const ConfirmProvider = ({ children }: { children: React.ReactNode }) => {
    const [visible, setVisible] = useState(false)
    const [message, setMessage] = useState('Bạn Chắc Chắn Chứ?')
    const [onConfirm, setOnConfirm] = useState<() => void>(() => () => {})

    const handleShow = (options: optionsConfirm) => {
        setMessage(options.message)
        setOnConfirm(() => options.onConfirm)
        setVisible(true)
    }

    const handleHide = () => {
        setMessage('')
        setOnConfirm(() => () => {})
        setVisible(false)
    }

    const handleConfirm = () => {
        onConfirm()
        handleHide()
    }

    return (
        <ConfirmContext.Provider value={{ handleShow }}>
            {children}
            {visible && (
                <div className={cx('overlay')} onClick={handleHide}>
                    <div className={cx('popup')} onClick={(e) => e.stopPropagation()}>
                        <header>
                            <img src={images.logo} alt='THE COFFEE HOUSE' />
                            <FontAwesomeIcon className={cx('icon-close')} icon={faXmark} onClick={handleHide} />
                        </header>
                        <p className={cx('message')}>{message}</p>
                        <div className={cx('actions')}>
                            <Button onClick={handleHide}>Hủy</Button>
                            <Button primary onClick={handleConfirm}>
                                Xác Nhận
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </ConfirmContext.Provider>
    )
}

export { ConfirmProvider, ConfirmContext }
