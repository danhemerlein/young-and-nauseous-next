import { UseCart } from '@/hooks/UseCart'

import Button from './Button'

const CartItems = () => {
  const { cart, updateItem } = UseCart()

  return (
    <ul className="mt-4 flex flex-col gap-4">
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
