'use client'

import Button from './Button'
import Price from './Price'

const ProductCard = ({ product, addToCart }) => {
  const { title, price, id } = product

  return (
    <li className="flex flex-col justify-center items-center h-[calc(100vh-64px)]">
      <h2 className="text-md whitespace-nowrap">{title}</h2>
      <Price price={price} />
      <Button handler={() => addToCart(id, title)} text="add to cart" />
    </li>
  )
}

export default ProductCard
