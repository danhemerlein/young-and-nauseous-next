'use client'

import Button from './Button'
import Price from './Price'

const ProductCard = ({ product, addToCart }) => {
  const { title, price, id } = product

  return (
    <li className="flex justify-between items-center my-4 max-w-[300px]">
      <div className="flex w-[50%]">
        <h2 className="text-xl whitespace-nowrap">{title}</h2>
      </div>

      <div className="flex w-[50%] gap-2 items-center">
        <Price price={price} />
        <Button handler={() => addToCart(id, title)} text="add to cart" />
      </div>
    </li>
  )
}

export default ProductCard
