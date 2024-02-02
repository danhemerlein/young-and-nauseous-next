'use client'

import Layout from '@/components/layout'
import { CartContext, useCartState } from '@/hooks/useCart'
import { AuthContext, useAuthState } from '@/hooks/useAuth'
import { ModalContext, useModalState } from '@/hooks/useModal'

export default function App({ Component }) {
  const cart = useCartState()
  const session = useAuthState()
  const modal = useModalState()

  return (
    <AuthContext.Provider value={session}>
      <CartContext.Provider value={cart}>
        <ModalContext.Provider value={modal}>
          <Layout>
            <Component />
          </Layout>
        </ModalContext.Provider>
      </CartContext.Provider>
    </AuthContext.Provider>
  )
}
