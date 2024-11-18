import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef } from 'react'

import images from '../../assets/images'
import styles from './Header.module.scss'
import config from '../../config'
import services from '../../services'
import Menu from './Menu'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [menuChange, setMenuChange] = useState(false)
    const navRef = useRef<HTMLElement>(null)

    setInterval(() => {
        if (window.innerWidth < 991.98) {
            setMenuChange(true)
        } else {
            setMenuChange(false)
        }
    }, 100)

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
                        <Link to='/all' className={cx('header-top-item')}>
                            <img src={images.location} />
                            <span>98 Cửa hàng khắp cả nước</span>
                        </Link>
                        <Link to='/all' className={cx('header-top-item')}>
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
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
