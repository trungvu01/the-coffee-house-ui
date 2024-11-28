import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './ProductDetail.module.scss'
import services from '../../services'
import SliderImage from '../SliderImage'
import Button from '../Button'
import { CarIcon, CupIcon } from '../Icons'
import ProductItem from '../ProductItem'

const cx = classNames.bind(styles)

type optionType = {
    name: string
    moreFee: number
}

type productType = {
    product:
        | {
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
        | undefined
}

function ProductDetail({ product }: productType) {
    const menu = services.menuService.find((item) => item.title === 'Menu')
    const cate = menu?.children && menu?.children.find((cate) => cate.title === product?.cate)
    const productImgs = { default: product?.imgs ? product?.imgs : [] }
    const relatedProducts = services.productsService
        .filter((prod) => prod.cate === product?.cate && prod.title !== product?.title)
        .slice(0, 5)

    const data = {
        paths: [menu?.path ? menu?.path : '', cate?.path ? cate?.path : ''],
        titles: [menu?.title, product?.cate]
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
                            <p className={cx('breadcrumb-item', 'active')}>{product?.title}</p>
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
                            <h1 className={cx('name')}>{product?.title}</h1>
                            <p className={cx('price')}>{product?.price + '.000 đ'}</p>

                            {product?.size && (
                                <div className={cx('sizes', 'options')}>
                                    <p className={cx('title')}>Chọn size (bắt buộc)</p>
                                    <div className={cx('options-wrapper')}>
                                        {product?.size?.map((size, index) => {
                                            return (
                                                <div className={cx('option-item')} key={index}>
                                                    <CupIcon className={cx('cup-icon')} />
                                                    {`${size.name} + ${size.moreFee}${size.moreFee !== 0 ? '.000 đ' : ' đ'}`}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {product?.topping && (
                                <div className={cx('topping', 'options')}>
                                    <p className={cx('title')}>Topping</p>
                                    <div className={cx('options-wrapper')}>
                                        {product?.topping?.map((toppingType, index) => {
                                            return (
                                                <div
                                                    className={cx('option-item')}
                                                    key={index}
                                                >{`${toppingType.name} + ${toppingType.moreFee}.000 đ`}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            <Button primary className={cx('delivery-btn')}>
                                <CarIcon className={cx('icon')} />
                                <span>Đặt giao tận nơi</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <hr className={cx('separate')} />
                <div className='row'>
                    <div className={cx('product-desc')}>
                        <h3 className={cx('title')}>Mô tả sản phẩm</h3>
                        <p className={cx('desc')}>{product?.desc}</p>
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
