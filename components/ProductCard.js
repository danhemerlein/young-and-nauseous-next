'use client'

import Image from 'next/image'

const ProductCard = ({ product, addToCart }) => {
  const { image, title, description, price, id } = product

  return (
    <li>
      <div
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={image} width="100" height="100" alt={title}></Image>

        <h2 className={`mb-3 text-2xl font-semibold`}>{title}</h2>

        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {description} {price.toString()}
        </p>

        <button onClick={() => addToCart(id)}>add to cart</button>
      </div>
    </li>
  )
}

export default ProductCard
