'use client'
import ProductCard from '@/components/ProductCard'
import products from '@/products.json'
import { useState } from 'react'

const defaultCart = {
  products: {},
}

const Index = (props) => {
  const [cart, updateCart] = useState(defaultCart)

  const addToCart = ({ id } = {}) => {
    updateCart()
  }

  return (
    <>
      <p>
        Items: 2
        <br />
        Cost: $20
        <br />
        <button>checkout</button>
      </p>

      <ul className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-3 lg:text-left">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </ul>
    </>
  )
}

export default Index
