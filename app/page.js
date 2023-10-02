import products from '../products.json'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-3 lg:text-left">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </ul>
    </main>
  )
}
