import { NavBar, Footer,ProductDetail } from '../../components'
import { useParams } from 'react-router-dom';
import { REQUESTSTORE } from '../../utils/RequestStore'

const Product = () => {

    const {productId} = useParams()

    return(
        <>
        <NavBar/>
        <ProductDetail id={productId} requestStore={REQUESTSTORE}/>
        <Footer/>
        </>
    )
}

export default Product