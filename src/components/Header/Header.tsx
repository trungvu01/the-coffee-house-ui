import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import images from '../../assets/images'
import styles from './Header.module.scss'
import config from '../../config'
import services from '../../services'
import { MoreIcon } from '../Icons'
import PopperMenu from './PopperMenu'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header-top')}>
                <div className='container'>
                    <div className={cx('header-top-inner')}>
                        <Link to={config.routes.products + '/all'} className={cx('header-top-item')}>
                            <img src={images.location} />
                            <span>98 Cửa hàng khắp cả nước</span>
                        </Link>
                        <Link to={config.routes.products + '/all'} className={cx('header-top-item')}>
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
                        <Link to={config.routes.home}>
                            <img src={images.logo} alt='The Coffee House' className={cx('logo')} />
                        </Link>
                        <nav className={cx('navigation')}>
                            <ul className={cx('menu')}>
                                {services.menuService.map((item, index) => {
                                    return !item.children ? (
                                        <li key={index}>
                                            <Link className={cx('menu-item')} to={item.path}>
                                                {item.title}
                                                {item.children && <MoreIcon className={cx('more-icon')} />}
                                            </Link>
                                        </li>
                                    ) : (
                                        <li key={index}>
                                            <Link className={cx('menu-item', 'has-child')} to={item.path}>
                                                {item.title}
                                                {item.children && <MoreIcon className={cx('more-icon')} />}
                                            </Link>

                                            <div className={cx('menu-wrapper-lv2')}>
                                                <PopperMenu
                                                    layout={`repeat(${item.children.length}, 1fr)`}
                                                    className='lv2'
                                                    data={item}
                                                />
                                                <div
                                                    className={cx('menu-wrapper-lv3')}
                                                    style={{
                                                        gridTemplateColumns: `repeat(${item.children.length}, 1fr)`
                                                    }}
                                                >
                                                    {item.children &&
                                                        item.children.map((subItem, index) => {
                                                            return (
                                                                <PopperMenu
                                                                    key={index}
                                                                    className='lv3'
                                                                    data={subItem}
                                                                />
                                                            )
                                                        })}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
