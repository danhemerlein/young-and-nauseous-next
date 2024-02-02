'use client'

import Layout from '@/components/layout'
import { CartContext, UseCartState } from '@/hooks/UseCart'
import { AuthContext, UseAuthState } from '@/hooks/UseAuth'
import { ModalContext, UseModalState } from '@/hooks/UseModal'

export default function App({ Component }) {
  const cart = UseCartState()
  const session = UseAuthState()
  const modal = UseModalState()

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
