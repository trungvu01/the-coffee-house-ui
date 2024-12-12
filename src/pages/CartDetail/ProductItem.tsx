import classNames from 'classnames/bind'
import { useState, useContext } from 'react'

import styles from './CartDetail.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../components'
import { LoginContext, ToastContext } from '../../contexts'

const cx = classNames.bind(styles)

type optionType = {
    name: string
    moreFee: number
}

type productType = {
    cate: string
    type: string
    title: string
    price: number
    imgs: string[]
    thumb: string
    path: string
    size?: optionType[]
    topping?: optionType[]
    desc: string
    inHome?: undefined | boolean
}

type cartType = {
    name: string
    size?: string
    topping?: string
    quantity: number
    totalPrice: number
}

type propsType = {
    baseProduct: productType
    productInCart: cartType
    index: number
    isCheckout: boolean
}

const ProductItem = ({ baseProduct, productInCart, index, isCheckout }: propsType) => {
    const [selectedSize, setSelectedSize] = useState(
        baseProduct.size?.find((size) => size.name === productInCart.size)?.moreFee
    )
    const [selectedTopping, setSelectedTopping] = useState(
        baseProduct.topping?.find((topping) => topping.name === productInCart.topping)?.moreFee
    )
    const [quantity, setQuantity] = useState(productInCart.quantity)

    const loginContext = useContext(LoginContext)
    const addToast = useContext(ToastContext)
    const user = loginContext?.getUser()

    const handleChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSize(parseInt(e.target.value))
        if (user) {
            user.cart[index].size = baseProduct.size?.find((size) => size.moreFee === parseInt(e.target.value))?.name
            loginContext?.handleCartData(user.cart)
        }
    }

    const handleChangeTopping = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTopping(parseInt(e.target.value))
        if (user) {
            user.cart[index].topping = baseProduct.topping?.find(
                (topping) => topping.moreFee === parseInt(e.target.value)
            )?.name
            loginContext?.handleCartData(user.cart)
        }
    }

    const handleDecreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1))
        if (user) {
            if (user.cart[index].quantity - 1 < 1) {
                user.cart[index].quantity = 1
            } else {
                user.cart[index].quantity--
            }
            loginContext?.handleCartData(user.cart)
        }
    }

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => prev + 1)
        if (user) {
            user.cart[index].quantity++
            loginContext?.handleCartData(user.cart)
        }
    }

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.trim() === '') {
            setQuantity(0)
        } else {
            const newQuantity = parseInt(e.target.value)
            setQuantity(newQuantity)
            if (user) {
                user.cart[index].quantity = newQuantity
                loginContext?.handleCartData(user.cart)
            }
        }
    }

    const handleBlurInputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.target.value) === 0) {
            setQuantity(1)
            if (user) {
                user.cart[index].quantity = 1
                loginContext?.handleCartData(user.cart)
            }
        }
    }

    const handleDeleteProduct = () => {
        // if (user) {
        //     user.cart.splice(index, 1)
        //     loginContext?.handleCartData(user.cart)
        // }
        if (addToast) {
            addToast('warning', 'Chức năng này hiện đang khắc phục lỗi...', 3010)
        }
    }

    const calculateTotalPrice = () => {
        const total = (baseProduct.price + (selectedSize || 0) + (selectedTopping || 0)) * quantity
        if (user) {
            user.cart[index].totalPrice = total
            loginContext?.handleCartData(user.cart)
        }
        return total
    }

    return (
        <li>
            <div className={cx('card-item')}>
                <img className={cx('product-thumb')} src={baseProduct.thumb} alt={baseProduct.title} />
                <div className={cx('product-info')}>
                    <h4>{baseProduct.title}</h4>

                    {isCheckout ? (
                        <>
                            {productInCart.size && <span>Size: {productInCart.size}</span>}
                            {productInCart.topping && <span>Topping: {productInCart.topping}</span>}
                            <span className={cx('product-quantity')}>x{productInCart.quantity}</span>
                        </>
                    ) : (
                        <div className={cx('edit-product')} onClick={(e) => e.preventDefault()}>
                            <div className={cx('edit-option')}>
                                {baseProduct.size ? (
                                    <div className={cx('edit-option-item')}>
                                        <select
                                            className={cx('options')}
                                            value={selectedSize}
                                            onChange={handleChangeSize}
                                        >
                                            {baseProduct.size.map((size, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        className={cx('option-item')}
                                                        value={size.moreFee}
                                                    >
                                                        {size.name}:{' '}
                                                        {size.moreFee === 0 ? '0đ' : `${size.moreFee}.000đ`}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                ) : (
                                    <span>Size: Nhỏ</span>
                                )}
                                {baseProduct.topping && productInCart.topping && (
                                    <div className={cx('edit-option-item')}>
                                        {baseProduct.topping.length > 1 ? (
                                            <select
                                                className={cx('options')}
                                                value={selectedTopping}
                                                onChange={handleChangeTopping}
                                            >
                                                {baseProduct.topping.map((topping, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            className={cx('option-item')}
                                                            value={topping.moreFee}
                                                        >
                                                            {topping.name}:{' '}
                                                            {topping.moreFee === 0 ? '0đ' : `${topping.moreFee}.000đ`}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        ) : (
                                            productInCart.topping && <span>Topping: {productInCart.topping}</span>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className={cx('edit-quantity-wrapper')}>
                                <div className={cx('edit-quantity')}>
                                    <div onClick={handleDecreaseQuantity} className={cx('icon')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </div>
                                    <input
                                        type='text'
                                        value={quantity}
                                        onChange={handleChangeQuantity}
                                        onBlur={handleBlurInputQuantity}
                                    />
                                    <div onClick={handleIncreaseQuantity} className={cx('icon')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                </div>
                                <Button onClick={handleDeleteProduct} className={cx('delete-btn')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
                <span className={cx('product-price')}>{calculateTotalPrice()}.000đ</span>
            </div>
        </li>
    )
}

export default ProductItem
