import ProductCard from '@/components/ProductCard'
import { useCart } from '@/hooks/useCart'

const ProductList = ({ array }) => {
  const { addToCart } = useCart()

  return array.length > 0 ? (
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
  ) : (
    <p className="text-md my-4">coming soon</p>
  )
}

export default ProductList
