import classNames from 'classnames/bind'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo, useContext } from 'react'

import styles from './ProductDetail.module.scss'
import services from '../../services'
import SliderImage from '../SliderImage'
import { CarIcon, CupIcon } from '../Icons'
import ProductItem from '../ProductItem'
import { Button } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { LoginContext, ToastContext } from '../../contexts'
import config from '../../config'

const cx = classNames.bind(styles)

type optionType = {
    name: string
    moreFee: number
}

type productType = {
    product: {
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
}

type cartType = {
    name: string
    size?: string
    topping?: string
    quantity: number
    totalPrice: number
}

function ProductDetail({ product }: productType) {
    const menu = services.menuService.find((item) => item.title === 'Menu')
    const cate = menu?.children && menu?.children.find((cate) => cate.title === product.cate)
    const productImgs = { default: product.imgs }
    const relatedProducts = services.productsService
        .filter((prod) => prod.cate === product.cate && prod.title !== product.title)
        .slice(0, 5)

    const data = {
        paths: [menu?.path || '', cate?.path || ''],
        titles: [menu?.title, product.cate]
    }

    const loginContext = useContext(LoginContext)
    const addToast = useContext(ToastContext)
    const navigate = useNavigate()

    const defaultSize: optionType = useMemo(() => ({ name: 'Nhỏ', moreFee: 0 }), [])
    const [selectedSize, setSelectedSize] = useState<optionType>(defaultSize)
    const [selectedTopping, setSelectedTopping] = useState<optionType | null>(null)
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(product.price)
    const basePrice = product.price

    const location = useLocation()

    useEffect(() => {
        setQuantity(1)
        setSelectedSize(defaultSize)
        setSelectedTopping(null)
        setTotalPrice(product.price)
    }, [location.pathname, product.price, defaultSize])

    const updateTotalPrice = (
        quantity: number,
        basePrice: number,
        selectedSize: optionType,
        selectedTopping: optionType | null
    ) => {
        const newTotalPrice = quantity * (basePrice + selectedSize?.moreFee + (selectedTopping?.moreFee || 0))
        setTotalPrice(newTotalPrice)
    }

    const handleSizeChange = (newSize: optionType) => {
        setSelectedSize(newSize)
        updateTotalPrice(quantity, basePrice, newSize, selectedTopping)
    }

    const handleToppingChange = (newTopping: optionType) => {
        if (selectedTopping?.name === newTopping.name) {
            setSelectedTopping(null)
            updateTotalPrice(quantity, basePrice, selectedSize, null)
        } else {
            setSelectedTopping(newTopping)
            updateTotalPrice(quantity, basePrice, selectedSize, newTopping)
        }
    }

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
        updateTotalPrice(newQuantity, basePrice, selectedSize, selectedTopping)
    }

    const handleDecreaseQuantity = () => {
        const newQuantity = quantity - 1
        if (newQuantity < 1) {
            setQuantity(1)
        } else {
            setQuantity(newQuantity)
            updateTotalPrice(newQuantity, basePrice, selectedSize, selectedTopping)
        }
    }

    const handleChangeInputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.trim() === '') {
            setQuantity(0)
            updateTotalPrice(1, basePrice, selectedSize, selectedTopping)
        } else {
            const newQuantity = parseInt(e.target.value)
            setQuantity(newQuantity)
            updateTotalPrice(newQuantity, basePrice, selectedSize, selectedTopping)
        }
    }

    const handleBlurInputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.target.value) === 0) {
            setQuantity(1)
            updateTotalPrice(1, basePrice, selectedSize, selectedTopping)
        }
    }

    const handleAddProduct = () => {
        if (loginContext?.isLoggedIn) {
            const user = loginContext.getUser()
            if (user.cart) {
                if (user.cart.length === 0) {
                    const newProduct: cartType = {
                        name: product.title,
                        size: selectedSize.name,
                        topping: selectedTopping?.name,
                        quantity: quantity,
                        totalPrice: totalPrice
                    }
                    user.cart.unshift(newProduct)
                    loginContext.handleCartData(user.cart)
                } else {
                    let isNew: boolean = false
                    for (let index = 0; index < user.cart.length; index++) {
                        if (
                            user.cart[index].name === product.title &&
                            user.cart[index].size === selectedSize.name &&
                            user.cart[index].topping === selectedTopping?.name
                        ) {
                            isNew = true
                            user.cart[index].quantity += quantity
                            loginContext.handleCartData(user.cart)
                            break
                        }
                    }
                    if (!isNew) {
                        const newProduct: cartType = {
                            name: product.title,
                            size: selectedSize.name,
                            topping: selectedTopping?.name,
                            quantity: quantity,
                            totalPrice: totalPrice
                        }
                        user.cart.unshift(newProduct)
                        loginContext.handleCartData(user.cart)
                    }
                }
            }
            if (addToast) {
                addToast('success', 'Thêm sản phẩm vào giỏ hàng thành công!', 3010)
            }
        } else {
            navigate(config.routes.login)
            if (addToast) {
                addToast('info', 'Đăng nhập để sử dụng đầy đủ tính năng!', 3010)
            }
        }
    }

    return (
        <div className={cx('product-detail-page')}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={cx('breadcrumb')}>
                            {data.paths.map((item, index) => {
                                return (
                                    <Link className={cx('breadcrumb-item')} key={index} to={item}>
                                        {data.titles[index]}
                                    </Link>
                                )
                            })}
                            <p className={cx('breadcrumb-item', 'active')}>{product.title}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div className={cx('product-slider')}>
                            <SliderImage data={productImgs} classNameItem={cx('productImg-item')} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className={cx('product-info')}>
                            <h1 className={cx('name')}>{product.title}</h1>
                            <p className={cx('price')}>{totalPrice + '.000 đ'}</p>

                            {product.size && (
                                <div className={cx('sizes', 'options')}>
                                    <p className={cx('title')}>Chọn size (bắt buộc)</p>
                                    <div className={cx('options-wrapper')}>
                                        {product.size.map((size, index) => {
                                            return (
                                                <Button
                                                    onClick={() => handleSizeChange(size)}
                                                    className={cx('option-item', {
                                                        selected: selectedSize?.name === size.name
                                                    })}
                                                    key={index}
                                                >
                                                    <CupIcon className={cx('cup-icon')} />
                                                    {`${size.name} + ${size.moreFee}${size.moreFee !== 0 ? '.000 đ' : ' đ'}`}
                                                </Button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {product.topping && (
                                <div className={cx('topping', 'options')}>
                                    <p className={cx('title')}>Topping</p>
                                    <div className={cx('options-wrapper')}>
                                        {product.topping.map((toppingType, index) => {
                                            return (
                                                <Button
                                                    onClick={() => handleToppingChange(toppingType)}
                                                    className={cx('option-item', {
                                                        selected: selectedTopping?.name === toppingType.name
                                                    })}
                                                    key={index}
                                                >
                                                    {`${toppingType.name} + ${toppingType.moreFee}.000 đ`}
                                                </Button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className={cx('product-quantity-wrapper')}>
                                <p className={cx('quantity-title')}>Số lượng</p>
                                <div className={cx('product-quantity')}>
                                    <Button
                                        onClick={handleDecreaseQuantity}
                                        className={cx('quantity-btn', 'decrease-btn')}
                                        rounded
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>
                                    <input
                                        type='text'
                                        value={quantity}
                                        placeholder='1'
                                        onChange={(e) => handleChangeInputQuantity(e)}
                                        onBlur={(e) => handleBlurInputQuantity(e)}
                                    />
                                    <Button
                                        onClick={handleIncreaseQuantity}
                                        className={cx('quantity-btn', 'increase-btn')}
                                        rounded
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </div>
                            </div>

                            <Button onClick={handleAddProduct} primary className={cx('delivery-btn')}>
                                <CarIcon className={cx('icon')} />
                                <span>{loginContext?.isLoggedIn ? 'Thêm vào giỏ hàng' : 'Đặt giao tận nơi'}</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <hr className={cx('separate')} />
                <div className='row'>
                    <div className={cx('product-desc')}>
                        <h3 className={cx('title')}>Mô tả sản phẩm</h3>
                        <p className={cx('desc')}>{product.desc}</p>
                    </div>
                </div>
                <hr className={cx('separate')} />
                <div className={cx('related-products')}>
                    <div className='row'>
                        <h3 className={cx('title')}>Sản phẩm liên quan</h3>
                        {relatedProducts.map((product, index) => {
                            return (
                                <div className='col-md-3 col-lg-2 col-sm-4 col-6' key={index}>
                                    <ProductItem product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
