import { useCart } from '@/hooks/useCart'
import cn from 'classnames'

const MiniCart = ({ open, handleClick }) => {
  const { subtotal, checkout } = useCart()
  return (
    <div
      className={cn(
        'fixed top-0 right-0 min-h-screen bg-reverse transition-cubic-bezier w-full p-4 duration-500 w-[320px] flex',
        !open ? 'translate-x-full right-unset' : 'translate-x-0'
      )}
    >
      <button
        className="bg-reverse text-ink border-solid border-ink border-2 absolute top-0 right-0 right-4 top-4 px-4 py-2"
        onClick={handleClick}
      >
        close
      </button>
      <button className="bg-reverse text-ink" onClick={checkout}>
        checkout
      </button>
    </div>
  )
}

export default MiniCart
