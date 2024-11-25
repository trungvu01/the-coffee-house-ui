import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'
import images from '../../assets/images'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <h3 className={cx('footer-title')}>Giới thiệu</h3>
                        <ul>
                            <li>
                                <Link className={cx('footer-item-link')} to='/'>
                                    Về Chúng Tôi
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('footer-item-link')} to='/'>
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('footer-item-link')} to='/'>
                                    Khuyến mãi
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('footer-item-link')} to='/'>
                                    Chuyện cà phê
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('footer-item-link')} to='/'>
                                    Cửa Hàng
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('footer-item-link')} to='/'>
                                    Tuyển dụng
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <h3 className={cx('footer-title')}>Điều khoản</h3>
                        <ul>
                            <li>
                                <Link
                                    className={cx('footer-item-link')}
                                    to='https://thecoffeehouse.com/pages/dieu-khoan-su-dung'
                                >
                                    Điều khoản sử dụng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={cx('footer-item-link')}
                                    to='https://thecoffeehouse.com/pages/chinh-sach-bao-mat-thong-tin'
                                >
                                    Chính sách bảo mật thông tin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={cx('footer-item-link')}
                                    to='https://thecoffeehouse.com/pages/huong-dan-xuat-hoa-don-gtgt'
                                >
                                    Hướng dẫn xuất hóa đơn GTGT
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className={cx('hotline-footer')}>
                            <p>
                                <img src={images.footer_phone} alt='' />
                                Đặt hàng: 1800 6936
                            </p>
                            <p>
                                <img src={images.footer_location} alt='' />
                                Liên hệ
                            </p>
                        </div>
                        <div className={cx('address-footer')}>
                            <p>
                                67 Đinh Bộ Lĩnh, P.26,
                                <br />
                                Q.Bình Thạnh, TP.Hồ Chí Minh
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <a href='https://www.facebook.com/The.Coffee.House.2014/' className={cx('link-facebook')}>
                            The Coffee House
                        </a>
                        <div className={cx('footer-social')}>
                            <a href='https://www.facebook.com/The.Coffee.House.2014/'>
                                <img src={images.facebook_icon} alt='' />
                            </a>
                            <a href='https://www.instagram.com/thecoffeehousevn/'>
                                <img src={images.ig_icon} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
                <span className={cx('footer-separate')}></span>
                <div className='row'>
                    <ul className={cx('footer-copyright')}>
                        <li>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</li>
                        <li>
                            Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày 23/07/2014. Người đại diện:
                            NGÔ NGUYÊN KHA
                        </li>
                        <li>
                            Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện thoại: (028) 7107 8079
                            Email: hi@thecoffeehouse.vn
                        </li>
                        <li>© 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
