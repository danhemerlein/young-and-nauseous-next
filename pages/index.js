'use client'

import ProductList from '@/components/ProductList'
import products from '@/products.json'

const Home = () => {
  return <ProductList array={products} />
}

export default Home
