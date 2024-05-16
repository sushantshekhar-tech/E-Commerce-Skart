import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/product-list/component/ProductDetail'
import Footer from './Footer'

const ProductDetailPage = () => {
  return (
    <div>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>
        <Footer></Footer>
    </div>
  )
}

export default ProductDetailPage;