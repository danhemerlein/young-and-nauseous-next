import ProductCard from '@/components/ProductCard'
import Record from '@/components/Record/Record'
import { useCart } from '@/hooks/useCart'

const ProductList = ({ array }) => {
  const { addToCart } = useCart()

  return array.length > 0 ? (
    <div className="grid grid-cols-2 ">
      <Record />

      <ul>
        {array.map((product) => {
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
  ) : (
    <p className="text-md my-4">coming soon</p>
  )
}

export default ProductList
