import { useCart } from '@/hooks/useCart'
import CartItems from './CartItems'
import cn from 'classnames'

const MiniCart = ({ open, handleClick }) => {
  const { checkout, subtotal } = useCart()
  return (
    <div
      className={cn(
        'fixed top-0 right-0 min-h-screen bg-reverse transition-cubic-bezier p-4 duration-500 w-[320px] flex border-solid border-ink border-2 border-top-0 border-bottom-0 border-right-0 flex-col',
        !open ? 'translate-x-full right-unset' : 'translate-x-0'
      )}
    >
      <button
        className="bg-reverse text-ink border-solid border-ink border-2 px-4 py-2"
        onClick={handleClick}
      >
        close
      </button>

      <div className="flex-grow flex justify-between flex-col">
        <CartItems />

        <h3 className="text-ink mb-4">subtotal: ${subtotal}</h3>
      </div>

      <button
        className="bg-reverse text-ink border-solid border-ink border-2 px-4 py-2 hover:bg-ink hover:text-reverse"
        onClick={checkout}
      >
        checkout
      </button>
    </div>
  )
}

export default MiniCart
