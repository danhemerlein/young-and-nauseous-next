'use client'
import Image from 'next/image'
import Button from './Button'
import Price from './Price'

const ProductCard = ({ product, addToCart }) => {
  const { image, title, description, price, id } = product

  return (
    <li className="border-2 flex items-center flex-col p-4 gap-2">
      <Image src={image} width="100" height="100" alt={title}></Image>

      <h2 className="w-full text-left">{title}</h2>

      <p className="w-full text-left">{description}</p>

      <Price price={price} />

      <Button handler={() => addToCart(id)} text="add to cart" />
    </li>
  )
}

export default ProductCard
