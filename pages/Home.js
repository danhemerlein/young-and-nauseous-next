'use client'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import products from '@/products.json'
import { useCart } from '@/hooks/useCart'

const Index = () => {
  const { addToCart } = useCart()

  return (
    <div className="min-h-[calc(100vh-78px)] grid gap-4 grid-cols-2">
      <div className="w-full flex items-center justify-center">
        <Image
          src={'/images/building.jpg'}
          width="900"
          height="900"
          alt={'building'}
        ></Image>
      </div>

      <ul className="grid grid-cols-2 gap-4">
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
    </div>
  )
}

export default Index
