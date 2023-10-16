import { useCart } from '@/hooks/useCart'
import CartItems from './CartItems'
import cn from 'classnames'
import Button from './Button'

const MiniCart = ({ open, handleClick }) => {
  const { checkout, subtotal } = useCart()
  return (
    <div
      className={cn(
        'fixed top-0 right-0 min-h-screen bg-reverse transition-cubic-bezier p-4 duration-500 w-[320px] flex border-solid border-ink border border-t-0 border-b-0 border-r-0 flex-col',
        !open ? 'translate-x-full right-unset' : 'translate-x-0'
      )}
    >
      <Button handler={handleClick} text="close" />

      <div className="flex-grow flex justify-between flex-col">
        <CartItems />

        <h3 className="mb-4 text-md">subtotal: ${subtotal}</h3>
      </div>

      <Button handler={checkout} text="checkout" />
    </div>
  )
}

export default MiniCart
