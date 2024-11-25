import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Collections.module.scss'
import services from '../../services'
import { ProductItem } from '../../components'

const cx = classNames.bind(styles)

function Collections() {
    const { type } = useParams()
    let collections = services.productsService
    const types: string[] = []
    services.productsService.forEach((product) => {
        types.push(product.type)
    })

    const uniqueTypes = [...new Set(types)]

    switch (type) {
        case 'ca-phe':
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            collections = services.productsService.filter((item) => item.cate === 'Cà Phê')
            break

        case 'ca-phe-highlight-2':
            collections = services.productsService.filter((item) => item.type === 'Cà Phê Highlight')
            break

        case 'ca-phe-viet-nam':
            collections = services.productsService.filter((item) => item.type === 'Cà Phê Việt Nam')
            break

        case 'ca-phe-may':
            collections = services.productsService.filter((item) => item.type === 'Cà Phê Máy')
            break

        case 'cold-brew':
            collections = services.productsService.filter((item) => item.type === 'Cold Brew')
            break

        case 'trai-cay-xay-0-c':
            collections = services.productsService.filter((item) => item.cate === 'Trái Cây Xay 0°C')
            break

        case 'hi-tea-healthy':
            collections = services.productsService.filter((item) => item.cate === 'Trà Trái Cây - HiTea')
            break

        case 'tra-trai-cay':
            collections = services.productsService.filter((item) => item.type === 'Trà Trái Cây')
            break

        case 'hi-tea-tra':
            collections = services.productsService.filter((item) => item.type === 'Hi-Tea')
            break

        case 'tra-sua-macchiato':
            collections = services.productsService.filter((item) => item.cate === 'Trà Sữa')
            break

        case 'tra-sua':
            collections = services.productsService.filter((item) => item.type === 'Trà Sữa')
            break

        case 'tra-xanh-tay-bac':
            collections = services.productsService.filter((item) => item.cate === 'Trà Xanh - Chocolate')
            break

        case 'thuc-uong-khac':
            collections = services.productsService.filter((item) => item.type === 'Chocolate')
            break

        case 'da-xay-frosty-1':
            collections = services.productsService.filter((item) => item.cate === 'Thức uống đá xay')
            break

        case 'banh':
            collections = services.productsService.filter((item) => item.cate === 'Bánh & Snack')
            break

        case 'banh-man':
            collections = services.productsService.filter((item) => item.type === 'Bánh mặn')
            break

        case 'banh-ngot':
            collections = services.productsService.filter((item) => item.type === 'Bánh ngọt')
            break

        case 'banh-pastry':
            collections = services.productsService.filter((item) => item.type === 'Bánh Pastry')
            break

        case 'thuong-thuc-tai-nha':
            collections = services.productsService.filter((item) => item.cate === 'Thưởng Thức Tại Nhà')
            break

        case 'ca-phe-tai-nha':
            collections = services.productsService.filter((item) => item.type === 'Cà phê tại nhà')
            break

        default:
            collections = services.productsService
            break
    }

    return (
        <main className={cx('collections-page')}>
            <div className='container'>
                {uniqueTypes.map((type, index) => {
                    return (
                        collections.filter((product) => product.type === type).length > 0 && (
                            <div key={index} className={cx('row', 'product-list-type')}>
                                <h3 className={cx('title-type')}>{type}</h3>
                                {collections
                                    .filter((product) => product.type === type)
                                    .map((product, index) => {
                                        return (
                                            <div key={index} className='col-lg-4 col-6'>
                                                <ProductItem product={product} />
                                            </div>
                                        )
                                    })}
                            </div>
                        )
                    )
                })}
            </div>
        </main>
    )
}

export default Collections
