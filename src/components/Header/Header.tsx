import classNames from 'classnames/bind'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef, useContext } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import images from '../../assets/images'
import styles from './Header.module.scss'
import config from '../../config'
import services from '../../services'
import Menu from './Menu'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { LoginContext } from '../../contexts'
import { Button, Cart, PopperWrapper } from '../../components'
import { ToastContext } from '../../contexts'

const cx = classNames.bind(styles)

// follow size window
const useWindowSize = () => {
    const [isTablet, setIsTablet] = useState(window.innerWidth < 991.98)

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth < 991.98)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isTablet
}

function Header() {
    const isTablet = useWindowSize()
    const [showMenu, setShowMenu] = useState(false)
    const [menuChange, setMenuChange] = useState(false)
    const navRef = useRef<HTMLElement>(null)

    const [isOpenConfirmPopup, setIsOpenConfirmPopup] = useState(false)
    const [visible, setVisible] = useState(false)

    const loginContext = useContext(LoginContext)
    const addToast = useContext(ToastContext)
    const user = loginContext?.getUser()

    const navigate = useNavigate()

    useEffect(() => {
        setMenuChange(isTablet)
    }, [isTablet])

    const handleShowMenu = () => {
        if (navRef.current) {
            navRef.current.classList.add(cx('show'))
            setShowMenu(true)
        }
    }

    const handleHideMenu = () => {
        if (navRef.current) {
            navRef.current.classList.remove(cx('show'))
            setShowMenu(false)
        }
    }

    // handle logout
    const handleOpenPopup = () => {
        setIsOpenConfirmPopup(true)
        setVisible(false)
    }
    const handleClosePopup = () => setIsOpenConfirmPopup(false)

    const handleLogout = () => {
        handleClosePopup()
        loginContext?.logout()
        navigate(config.routes.login)
        if (addToast) {
            addToast('success', 'Đăng xuất thành công.', 3010)
        }
    }

    return (
        <header className={cx('header')}>
            <div className={cx('header-top')}>
                <div className='container'>
                    <div className={cx('header-top-inner')}>
                        <Link to='/collections/all' className={cx('header-top-item')}>
                            <img src={images.location} />
                            <span>98 Cửa hàng khắp cả nước</span>
                        </Link>
                        <Link to='/collections/all' className={cx('header-top-item')}>
                            <img src={images.phone} />
                            <span>Đặt hàng: 1800.6936</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className='container'>
                    <div className={cx('header-bottom-inner')}>
                        {/* logo */}
                        {menuChange &&
                            (showMenu ? (
                                <FontAwesomeIcon icon={faXmark} className={cx('bar-icon')} onClick={handleHideMenu} />
                            ) : (
                                <FontAwesomeIcon icon={faBars} className={cx('bar-icon')} onClick={handleShowMenu} />
                            ))}
                        <Link to={config.routes.home}>
                            <img src={images.logo} alt='The Coffee House' className={cx('logo')} />
                        </Link>
                        {menuChange && showMenu && <div className={cx('overlay')} onClick={handleHideMenu}></div>}
                        <nav ref={navRef} className={cx('navigation')}>
                            <Menu onHideMenu={handleHideMenu} data={services.menuService} />
                        </nav>

                        {/* account */}
                        {loginContext?.isLoggedIn ? (
                            <div className={cx('user-action')}>
                                <Cart />
                                <span className={cx('separate')}></span>

                                <HeadlessTippy
                                    visible={visible}
                                    onClickOutside={() => setVisible(false)}
                                    interactive
                                    placement='bottom-end'
                                    offset={[10, 10]}
                                    render={(attrs) => (
                                        <div tabIndex={parseInt('-1')} {...attrs}>
                                            <PopperWrapper>
                                                <ul className={cx('user-avt-action')}>
                                                    <li>
                                                        <Link to='' onClick={() => setVisible(false)}>
                                                            Thông Tin Cá Nhân
                                                        </Link>
                                                    </li>
                                                    {user && user?.cart.length > 0 && (
                                                        <li>
                                                            <Link
                                                                to={config.routes.cartDetail}
                                                                onClick={() => setVisible(false)}
                                                            >
                                                                Tới Giỏ Hàng
                                                            </Link>
                                                        </li>
                                                    )}
                                                    <li>
                                                        <Button
                                                            onClick={handleOpenPopup}
                                                            className={cx('logout-action')}
                                                        >
                                                            Logout
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <div onClick={() => setVisible((prev) => !prev)}>
                                        <img
                                            className={cx('avatar-user')}
                                            src={user?.info?.avatar}
                                            alt={user?.info.userName}
                                        />
                                    </div>
                                </HeadlessTippy>

                                {isOpenConfirmPopup && (
                                    <div className={cx('overlay-user-action')} onClick={handleClosePopup}>
                                        <div className={cx('popup')} onClick={(e) => e.stopPropagation()}>
                                            <header className={cx('popup-header')}>
                                                <img src={images.logo} />
                                                <FontAwesomeIcon
                                                    className={cx('icon-close')}
                                                    icon={faXmark}
                                                    onClick={handleClosePopup}
                                                />
                                            </header>
                                            <p className={cx('message')}>Bạn Muốn Đăng Xuất?</p>
                                            <div className={cx('actions')}>
                                                <Button primary onClick={handleLogout}>
                                                    Xác Nhận
                                                </Button>
                                                <Button onClick={handleClosePopup}>Hủy</Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to='/login' className={cx('login-btn')}>
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
