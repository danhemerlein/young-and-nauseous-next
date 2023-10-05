'use client'
import Image from 'next/image'
import Button from './Button'
import Price from './Price'

const ProductCard = ({ product, addToCart }) => {
  const { image, title, description, price, id } = product

  return (
    <li className="flex items-center flex-col gap-2">
      <Image src={image} width="9000" height="9000" alt={title}></Image>

      <h2 className="w-full text-xl text-center">{title}</h2>

      {description && <p className="w-full text-left">{description}</p>}
      <Price price={price} />

      <Button handler={() => addToCart(id)} text="add to cart" />
    </li>
  )
}

export default ProductCard
