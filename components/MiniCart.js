import cn from 'classnames'

import { UseCart } from '@/hooks/UseCart'

import Button from './Button'
import CartItems from './CartItems'

const MiniCart = ({ open, handleClick }) => {
  const { checkout, subtotal } = UseCart()
  return (
    <div
      className={cn(
        'transition-cubic-bezier fixed right-0 top-0 flex min-h-screen w-[320px] flex-col border border-b-0 border-r-0 border-t-0 border-solid border-ink bg-reverse p-4 duration-500',
        !open ? 'right-unset translate-x-full' : 'translate-x-0',
      )}
    >
      <Button handler={handleClick} text="close" />

      <div className="flex flex-grow flex-col justify-between">
        <CartItems />

        <h3 className="text-md mb-4">subtotal: ${subtotal}</h3>
      </div>

      <Button handler={checkout} text="checkout" />
    </div>
  )
}

export default MiniCart
