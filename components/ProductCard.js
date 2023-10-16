'use client'

import Button from './Button'
import Price from './Price'

const ProductCard = ({ product, addToCart }) => {
  const { title, price, id, type } = product

  const renderEmoji = (type) => {
    switch (type) {
      case 'stems':
        return '💿'
      case 'samples':
        return '📦'
      case 'other':
        return '🎙️'
      default:
        return '📀'
    }
  }

  return (
    <li className="flex justify-between items-center my-4 max-w-[400px]">
      <div className="flex w-[50%] items-center">
        <span className="mr-4 block">{renderEmoji(type)}</span>
        <h2 className="text-md whitespace-nowrap">{title}</h2>
      </div>

      <div className="flex w-[50%] gap-2 items-center">
        <Price price={price} />
        <Button handler={() => addToCart(id, title)} text="add to cart" />
      </div>
    </li>
  )
}

export default ProductCard
