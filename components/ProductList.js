import ProductCard from '@/components/ProductCard'
import Record from '@/components/Record'
import { useAuth } from '@/hooks/useAuth'
// import { useCart } from '@/hooks/useCart'

const ProductList = ({ array }) => {
  // const { addToCart } = useCart()
  const { session } = useAuth()

  console.log(session);

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
              session={session}
              // addToCart={addToCart}
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
