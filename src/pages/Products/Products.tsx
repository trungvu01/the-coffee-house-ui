import { ProductDetail } from '../../components'
import { useParams } from 'react-router-dom'
import services from '../../services'

function Products() {
    const { productName } = useParams()

    const productInfo = services.productsService.find((item) => item.path === `/products/${productName}`)

    return <ProductDetail product={productInfo} />
}

export default Products
