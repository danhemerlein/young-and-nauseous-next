import Image from 'next/image'
import { supabase } from '@/supabaseClient'
import cn from 'classnames'
import { UseAuth } from '@/hooks/UseAuth'
import { UseModal } from '@/hooks/UseModal'

const AccountMenu = ({ menuOpen }) => {
  const handleLogOut = () => {
    supabase.auth.signOut()
  }
  const { toggleModal } = UseModal()

  const { session } = UseAuth()

  const handleButton = () => {
    if (!session) {
      toggleModal()
    } else {
      handleLogOut()
    }
  }

  return (
    <div
      className={cn(
        'text-reverse bg-beige top-[calc(100%+1rem)] w-[150px] absolute  right-0 p-4 flex gap-4 flex-col border border-solid border-ink transition-opacity transition-cubic-bezier opacity-0',
        menuOpen && 'opacity-100'
      )}
    >
      {session && (
        <button className="text-left text-ink">create a mood ring</button>
      )}

      <button onClick={handleButton} className="text-left text-ink w-full">
        {session ? 'log out' : 'log in'}
      </button>

      {session && (
        <Image
          src="/images/angel-boy.jpg"
          alt="Handrawn illustration of Saturn."
          width="150"
          height="150"
        />
      )}
    </div>
  )
}

export default AccountMenu
