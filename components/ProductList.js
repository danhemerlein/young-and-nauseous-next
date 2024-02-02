import ProductCard from '@/components/ProductCard'
import Record from '@/components/Record'
import { useAuth } from '@/hooks/useAuth'

const ProductList = ({ products }) => {
  const { session } = useAuth()

  return (
    <div className="lg:grid lg:grid-cols-2">
      <Record />

      <ul>
        {products.map((product, key) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              index={key}
              session={session}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList
