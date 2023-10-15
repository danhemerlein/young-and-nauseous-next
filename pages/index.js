'use client'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import products from '@/products.json'
import { useCart } from '@/hooks/useCart'

const Home = () => {
  const { addToCart } = useCart()

  return (
    <div className="min-h-[calc(100vh-78px)] flex flex-col">
      {/* <div className="w-full flex items-center justify-center">
        <Image
          src={'/images/ascii-text-art.png'}
          width="900"
          height="900"
          alt={'young and nauseous'}
        ></Image>
      </div> */}

      <ul>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          )
        })}
      </ul>

      {/* <div className="w-full flex items-center justify-center">
        <Image
          src={'/images/building.jpg'}
          width="900"
          height="900"
          alt={'building'}
        ></Image>
      </div> */}
    </div>
  )
}

export default Home
