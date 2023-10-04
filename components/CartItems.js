import { useCart } from '@/hooks/useCart'

const CartItems = () => {
  const { cart } = useCart()
  console.log(cart)
  console.log(cart.product)
  console.log(Object.keys(cart.products))

  return (
    <ul className="flex flex-col gap-4 mt-4">
      {Object.keys(cart.products).map((key) => {
        return (
          <li key={key} className="flex justify-between">
            <p>{cart.products[key].id}</p>
            <p>{cart.products[key].quantity}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default CartItems
