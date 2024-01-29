'use client'

import Button from './Button'
import Price from './Price'

const ProductCard = ({ product, addToCart }) => {
  const { title, price, id } = product

  return (
    <li className="bg-ink text-reverse flex flex-col justify-center items-center h-screen font-lack gap-4">
      <h2 className="text-xl whitespace-nowrap">{title}</h2>
      <Price price={price} />
      <Button handler={() => addToCart(id, title)} text="add to cart" />
    </li>
  )
}

export default ProductCard
