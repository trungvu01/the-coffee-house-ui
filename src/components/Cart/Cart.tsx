import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { PopperWrapper } from '../../components'
import styles from './Cart.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoginContext } from '../../contexts'
import services from '../../services'
import config from '../../config'

const cx = classNames.bind(styles)

const Cart = () => {
    const [visible, setVisible] = useState(false)
    const loginContext = useContext(LoginContext)
    const user = loginContext?.getUser()
    const [quantity, setQuantity] = useState(user?.cart.reduce((acc, result) => acc + result.quantity, 0))
    const location = useLocation()
    const [, setReload] = useState(1)

    useEffect(() => {
        const timerId = setInterval(() => {
            setReload((prev) => prev + 1)
        }, 100)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    useEffect(() => {
        setQuantity(user?.cart.reduce((acc, result) => acc + result.quantity, 0))
    }, [user?.cart])

    useEffect(() => {
        setVisible(false)
    }, [location])

    return (
        <div>
            <HeadlessTippy
                visible={visible}
                onClickOutside={() => setVisible(false)}
                interactive
                placement='bottom-end'
                offset={[10, 5]}
                render={(attrs) => (
                    <div tabIndex={parseInt('-1')} {...attrs}>
                        <PopperWrapper>
                            <>
                                {user?.cart.length !== 0 ? (
                                    <ul className={cx('card-list')}>
                                        {user?.cart.map((product, index) => {
                                            const filteredProduct = services.productsService.find(
                                                (prod) => prod.title === product.name
                                            )

                                            return (
                                                filteredProduct && (
                                                    <li key={index}>
                                                        <Link className={cx('card-item')} to={filteredProduct.path}>
                                                            <img
                                                                className={cx('product-thumb')}
                                                                src={filteredProduct.thumb}
                                                                alt={filteredProduct.title}
                                                            />
                                                            <div className={cx('product-info')}>
                                                                <h4>{filteredProduct.title}</h4>
                                                                {product.size && <span>Size: {product.size}</span>}
                                                                {product.topping && (
                                                                    <span>Topping: {product.topping}</span>
                                                                )}
                                                                <span className={cx('product-price')}>
                                                                    {product.totalPrice}.000đ
                                                                </span>
                                                            </div>
                                                            <span className={cx('product-quantity')}>
                                                                x{product.quantity}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                )
                                            )
                                        })}
                                        <Link className={cx('see-details')} to={config.routes.cartDetail}>
                                            Xem chi tiết
                                        </Link>
                                    </ul>
                                ) : (
                                    <p className={cx('notify-cart-empty')}>Chưa có sản phẩm nào</p>
                                )}
                            </>
                        </PopperWrapper>
                    </div>
                )}
            >
                <button onClick={() => setVisible((prev) => !prev)} className={cx('cart')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className={cx('quantity')}>{quantity && quantity > 9 ? '9+' : quantity}</span>
                </button>
            </HeadlessTippy>
        </div>
    )
}

export default Cart
