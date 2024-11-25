import classNames from 'classnames/bind'

import styles from './ProductItem.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

type productType = {
    product: {
        cate: string
        type: string
        title: string
        price: number
        img: string
        thumb: string
        path: string
        size: string[]
        topping: string[]
        desc: string
        inHome?: boolean
    }
}

function ProductItem({ product }: productType) {
    return (
        <article className={cx('product-item')}>
            <Link to={product.path}>
                <img className={cx('thumb')} src={product.thumb} alt={product.title} />
            </Link>
            <div className={cx('info')}>
                <Link to={product.path} className={cx('title')}>
                    {product.title}
                </Link>
                <p className={cx('price')}>{product.price + '.000 đ'}</p>
            </div>
        </article>
    )
}

export default ProductItem
