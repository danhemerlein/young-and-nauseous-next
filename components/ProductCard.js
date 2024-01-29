'use client'

import Button from './Button'
import Price from './Price'

const ProductCard = ({ product, addToCart, index }) => {
  const { title, price, id } = product

  return (
    <li className="bg-beige text-ink flex flex-col justify-center items-center h-screen font-lack gap-4">
      <h2 className="font-baroque lowercase text-[124px] relative">
        {title}
        <sup className="text-sm font-lack absolute right-[-45px] top-0 border-ink border rounded-full border-solid p-4 h-[30px] w-[30px] flex items-center justify-center">
          {index + 1}
        </sup>
      </h2>
      <a className="cursor-pointer">stems - free download</a>
      {/* <Price price={price} /> */}
      {/* <Button handler={() => addToCart(id, title)} text="add to cart" /> */}
    </li>
  )
}

export default ProductCard
