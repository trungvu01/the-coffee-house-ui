import classNames from 'classnames/bind'

import styles from './Toast.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faCheckCircle, faCircleInfo, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

type data = {
    type: string
    message: string
}

const Toast = ({ type, message }: data) => {
    let Icon
    let heading = ''
    switch (type) {
        case 'success':
            Icon = <FontAwesomeIcon className={cx('icon-notify')} icon={faCheckCircle} />
            heading = 'Thành Công'
            break
        case 'warning':
            Icon = <FontAwesomeIcon className={cx('icon-notify')} icon={faTriangleExclamation} />
            heading = 'Cảnh Báo'
            break
        case 'error':
            Icon = <FontAwesomeIcon className={cx('icon-notify')} icon={faBug} />
            heading = 'Có Lỗi'
            break
        case 'info':
        default:
            Icon = <FontAwesomeIcon className={cx('icon-notify')} icon={faCircleInfo} />
            heading = 'Thông Báo'
            break
    }

    const handleHideToast = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const targetToast = (e.target as HTMLElement).closest(`.${cx('toast')}`)
        if (targetToast) {
            ;(targetToast as HTMLElement).style.display = 'none'
        }
    }

    return (
        <div className={cx('toast', `${type}`)}>
            {Icon}
            <div className={cx('content')}>
                <h4>{heading}</h4>
                <p>{message}</p>
            </div>
            <FontAwesomeIcon onClick={handleHideToast} icon={faXmark} className={cx('icon-close')} />
        </div>
    )
}

export default Toast
