import { useCart } from '@/hooks/useCart'
import Button from './Button'

const CartItems = () => {
  const { cart, updateItem } = useCart()

  return (
    <ul className="flex flex-col gap-4 mt-4">
      {Object.keys(cart.products).map((key) => {
        return (
          <li key={key} className="flex justify-between">
            <p className="text-sm">{cart.products[key].title}</p>

            <Button handler={() => updateItem(key, 0)} text="remove"></Button>
          </li>
        )
      })}
    </ul>
  )
}

export default CartItems
