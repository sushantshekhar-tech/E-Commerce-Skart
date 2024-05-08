import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/component/ProductList'

import React from 'react'

const Home = () => {
  return (
    <div>
<Navbar>
    <ProductList></ProductList>
</Navbar>
    
    </div>
  )
}

export default Home