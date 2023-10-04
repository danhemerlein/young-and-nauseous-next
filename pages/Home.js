'use client'
import ProductCard from '@/components/ProductCard'
import products from '@/products.json'
import { useCart } from '@/hooks/useCart'

const Index = () => {
  const { addToCart } = useCart()

  return (
    <div className="min-h-[calc(100vh-56px)]">
      <ul className="grid gap-4 text-center lg:max-w-5xl lg:w-full grid-cols-3 lg:text-left">
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
