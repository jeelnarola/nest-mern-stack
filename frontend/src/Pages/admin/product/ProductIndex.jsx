
import ComponentHeader from '../../../Components/Admin/Header/ComponentHeader'
import ProductBox from './ProductBox'
import ProductFilter from './productFilter'

function ProductIndex() {
  return (
    <>
        <div className="container mx-auto">
            <ComponentHeader title={'Product'}/>
            <ProductFilter/>
            <ProductBox/>
        </div>
    </>
  )
}

export default ProductIndex
