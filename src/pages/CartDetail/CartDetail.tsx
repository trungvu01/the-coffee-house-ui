import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import styles from './CartDetail.module.scss'
import config from '../../config'
import services from '../../services'
import { LoginContext, ToastContext } from '../../contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../components'
import ProductItem from './ProductItem'

const cx = classNames.bind(styles)

const CartDetail = () => {
    const loginContext = useContext(LoginContext)
    const addToast = useContext(ToastContext)
    const user = loginContext?.getUser()
    const location = useLocation()

    const [checkout, setCheckout] = useState(false)

    const [shippingFee] = useState(23)
    const [discount] = useState(0)
    const [totalPriceCart, setTotalPriceCart] = useState(0)

    const [, setReload] = useState(1)

    useEffect(() => {
        const timerId = setInterval(() => {
            setReload((prev) => prev + 1)
        }, 100)

        return () => {
            clearInterval(timerId)
        }
    })

    useEffect(() => {
        setCheckout(false)
    }, [location])

    useEffect(() => {
        const total = user?.cart?.reduce((acc, next) => acc + next.totalPrice, 0)
        setTotalPriceCart(total || 0)
    }, [user, loginContext, location])

    const goCheckout = () => {
        setCheckout(true)
    }

    const handleCheckout = () => {
        if (addToast) {
            addToast('info', 'Chức năng này hiện chưa hoàn thiện.', 3010)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className='container'>
                <div className={cx('breadcrumb')}>
                    <Link className={cx('prev-page')} to={config.routes.home}>
                        Home
                    </Link>
                    <span className={cx('separate')}>/</span>
                    {checkout ? (
                        <>
                            <Link className={cx('prev-page')} to={config.routes.cartDetail}>
                                Giỏ Hàng
                            </Link>
                            <span className={cx('separate')}>/</span>
                            <p className={cx('current-page')}>Thanh Toán</p>
                        </>
                    ) : (
                        <p className={cx('current-page')}>Giỏ Hàng</p>
                    )}
                </div>
                <div className='row'>
                    <div className='col-lg-8 col-12'>
                        <ul className={cx('product-list')}>
                            {user?.cart?.map((item, index) => {
                                const filteredProduct = services.productsService.find(
                                    (product) => product.title === item.name
                                )

                                if (filteredProduct) {
                                    return (
                                        <ProductItem
                                            key={index}
                                            baseProduct={filteredProduct}
                                            productInCart={item}
                                            index={index}
                                            isCheckout={checkout}
                                        />
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className={cx('checkout-block')}>
                            <label className={cx('notes')}>
                                <span>
                                    Ghi chú <FontAwesomeIcon className={cx('pen-icon')} icon={faPen} />
                                </span>
                                <input type='text' placeholder='Gửi lời nhắn...' />
                            </label>
                            <ul className={cx('fee-list')}>
                                <li className={cx('fee-item')}>
                                    <span>Mã giảm giá: </span>
                                    <span>{discount === 0 ? '0đ' : `${discount}.000đ`}</span>
                                </li>
                                {checkout && (
                                    <li className={cx('fee-item')}>
                                        <span>Phí Ship:</span>
                                        <span>{shippingFee === 0 ? '0đ' : `${shippingFee}.000đ`}</span>
                                    </li>
                                )}
                                <li className={cx('fee-item', 'sub-total')}>
                                    <span>Tổng tiền các sản phẩm:</span>
                                    <span>{totalPriceCart}.000đ</span>
                                </li>
                            </ul>
                            {checkout ? (
                                <p className={cx('fee-total')}>
                                    <span>Tổng: </span>
                                    <span>{totalPriceCart ? totalPriceCart + shippingFee : shippingFee}.000đ</span>
                                </p>
                            ) : (
                                <p className={cx('checkout-desc')}>Phí ship sẽ được tính khi thanh toán</p>
                            )}
                            <Button
                                className={cx('checkout-btn')}
                                primary
                                onClick={checkout ? handleCheckout : goCheckout}
                            >
                                {checkout ? 'Thanh Toán' : 'Đi Tới Thanh Toán'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetail
