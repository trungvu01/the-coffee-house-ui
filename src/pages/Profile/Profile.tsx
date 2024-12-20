import classNames from 'classnames/bind'
import { useContext, useEffect, useRef, useState } from 'react'

import styles from './Profile.module.scss'
import services from '../../services'
import { Button } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ConfirmContext, LoginContext, ToastContext } from '../../contexts'
import images from '../../assets/images'
import { useNavigate } from 'react-router-dom'
import config from '../../config'

const cx = classNames.bind(styles)

const Profile = () => {
    const loginContext = useContext(LoginContext)
    const addToast = useContext(ToastContext)
    const confirmContext = useContext(ConfirmContext)
    const user = loginContext?.getUser()

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState(user?.info?.firstName)
    const [lastName, setLastName] = useState(user?.info?.lastName)
    const [sex, setSex] = useState(user?.info?.sex)

    const inputImageRef = useRef<HTMLInputElement>(null)

    const [selectedMenu, setSelectedMenu] = useState('Thông Tin Cá Nhân')

    const [previewImg, setPreviewImg] = useState<string | null>(null)
    const [showPopup, setShowPopup] = useState(false)

    const handleSave = () => {
        if (firstName?.trim() === '' && lastName?.trim() === '') {
            if (addToast) {
                addToast('error', 'Cần có ít nhất 1 thông tin về tên của ban.', 3010)
            }
        } else {
            if (user) {
                user.info.firstName = firstName || ''
                user.info.lastName = lastName || ''
                if (typeof sex !== 'undefined') {
                    user.info.sex = sex
                }
            }

            if (user) {
                loginContext?.handleSaveData(user.info)
            }

            if (addToast) {
                addToast('success', 'Cập Nhật Thành Công!', 3010)
            }
        }
    }

    const menuContent: Record<string, React.ReactNode> = {
        'Thông Tin Cá Nhân': (
            <div>
                <div className={cx('group-info')}>
                    <label htmlFor='name'>Tên Khách Hàng</label>
                    <div className={cx('group-name')}>
                        <input type='text' id='name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className={cx('group-info')}>
                    <label>
                        <p>Số Điện Thoại</p> <input type='text' readOnly value={user?.info?.phone} />
                    </label>
                </div>
                <div className={cx('group-info')}>
                    <label>
                        <p>Ngày Sinh</p> <input type='text' readOnly value={user?.info?.birthday} />
                    </label>
                </div>
                <div className={cx('group-info')}>
                    <label>
                        <p>Email</p>{' '}
                        <input
                            type='text'
                            readOnly
                            value={
                                services.accountsService.find((account) => account.id === user?.info?.userAccountId)
                                    ?.nameAccount
                            }
                        />
                    </label>
                </div>
                <div className={cx('group-sex')}>
                    <label>Giới Tính</label>
                    <div className={cx('group-sex-wrapper')}>
                        <label className={cx('group-sex-item')}>
                            <input checked={sex} onChange={() => setSex(true)} type='radio' name='sex' />
                            <span>Nam</span>
                        </label>{' '}
                        <label className={cx('group-sex-item')}>
                            <input checked={!sex} type='radio' name='sex' onChange={() => setSex(false)} />
                            <span>Nữ</span>
                        </label>
                    </div>
                </div>

                <Button primary className={cx('save-info-btn')} onClick={handleSave}>
                    Cập Nhật
                </Button>
            </div>
        ),
        'Sổ Địa Chỉ': <div>Đây là nội dung Sổ Địa Chỉ</div>,
        'Quyền Lợi Thành Viên': <div>Đây là nội dung Quyền Lợi Thành Viên</div>,
        'Lịch Sử Mua Hàng': <div>Đây là nội dung Lịch Sử Mua Hàng</div>
    }

    const handleIconClick = () => {
        inputImageRef.current?.click()
    }

    useEffect(() => {
        return () => URL.revokeObjectURL(previewImg || '')
    }, [previewImg])

    const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                if (e.target?.result) {
                    const base64String = e.target.result.toString()
                    setPreviewImg(base64String)
                }
            }
            reader.readAsDataURL(file)
        }
        setShowPopup(true)
        e.target.value = '' //reset value input when choose the same image
    }

    const handleHidePopup = () => {
        URL.revokeObjectURL(previewImg || '')
        setPreviewImg(null)
        setShowPopup(false)
    }

    const handleUpdateAvatar = () => {
        if (user && previewImg) {
            user.info.avatar = previewImg
            loginContext?.handleSaveData(user.info)
        }
        if (addToast) {
            addToast('success', 'Cập Nhật Thành Công', 3010)
        }
        setPreviewImg(null)
        setShowPopup(false)
    }

    const handleLogout = () => {
        const options = {
            message: 'Bạn Muốn Đăng Xuất?',
            onConfirm: () => {
                loginContext?.logout()
                navigate(config.routes.login)
                if (addToast) {
                    addToast('success', 'Đăng xuất thành công.', 3010)
                }
            }
        }
        confirmContext?.handleShow(options)
    }

    return (
        <div className={cx('profile-body')}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <aside className={cx('sidebar')}>
                            <div className={cx('avatar')}>
                                <img
                                    src={user?.info?.avatar}
                                    alt={user?.info?.firstName + ' ' + user?.info?.lastName}
                                />
                                <FontAwesomeIcon
                                    className={cx('change-avt-icon')}
                                    icon={faFileImage}
                                    onClick={handleIconClick}
                                />
                                <input ref={inputImageRef} type='file' accept='image/*' onChange={handleChangeAvatar} />

                                {/* preview avatar */}
                                {showPopup && (
                                    <div className={cx('overlay-avt')}>
                                        <div className={cx('popup')} onClick={(e) => e.preventDefault()}>
                                            <header className={cx('popup-header')}>
                                                <img src={images.logo} />
                                                <FontAwesomeIcon
                                                    className={cx('icon-close')}
                                                    icon={faXmark}
                                                    onClick={handleHidePopup}
                                                />
                                            </header>
                                            <div className={cx('preview-avt-content')}>
                                                <p>Xem Trước Avatar</p>
                                                <img src={previewImg || ''} />
                                            </div>
                                            <div className={cx('popup-action')}>
                                                <Button onClick={handleHidePopup}>Hủy</Button>
                                                <Button primary onClick={handleUpdateAvatar}>
                                                    Cập Nhật
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <h1 className={cx('user-name')}>{user?.info?.firstName + ' ' + user?.info?.lastName}</h1>
                            <p className={cx('user-phone')}>{user?.info?.phone}</p>
                            <ul className={cx('list')}>
                                {Object.keys(menuContent).map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <p
                                                onClick={() => setSelectedMenu(item)}
                                                className={cx('item', {
                                                    active: item === selectedMenu
                                                })}
                                            >
                                                {item}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <Button className={cx('logout-btn')} onClick={handleLogout}>
                                Đăng Xuất
                            </Button>
                        </aside>
                    </div>
                    <div className='col-12 col-md-8'>
                        <div className={cx('content-wrapper')}>
                            <h2 className={cx('heading-content')}>{selectedMenu}</h2>
                            {menuContent[selectedMenu]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
