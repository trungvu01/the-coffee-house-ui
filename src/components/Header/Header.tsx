import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'
import 'tippy.js/dist/tippy.css' // optional

import images from '../../assets/images'
import styles from './Header.module.scss'
import config from '../../config'
import services from '../../services'
import Menu from './Menu'
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAccount, setIsAccount] = useState(false) //pending
    const navRef = useRef<HTMLElement>(null)

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

                        {isAccount ? (
                            <div className={cx('user-action')}>
                                <button className={cx('cart', 'user-action-btn')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                                <span className={cx('separate')}></span>
                            </div>
                        ) : (
                            <Link to='/login' className={cx('login', 'user-action-btn')}>
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
