import ProductCard from '@/components/ProductCard'
import Record from '@/components/Record'
import { useCart } from '@/hooks/useCart'

const ProductList = ({ array }) => {
  const { addToCart } = useCart()

  return array.length > 0 ? (
    <div className="lg:grid lg:grid-cols-2">
      <Record />

      <ul>
        {array.map((product, key) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              index={key}
              addToCart={addToCart}
            />
          )
        })}
      </ul>
    </div>
  ) : (
    <p className="text-md my-4">coming soon</p>
  )
}

export default ProductList
