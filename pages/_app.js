/* eslint-disable react/display-name */
'use client'

import Layout from '@/components/Layout'
import { AuthContext, UseAuthState } from '@/hooks/UseAuth'
import { CartContext, UseCartState } from '@/hooks/UseCart'
import { ModalContext, UseModalState } from '@/hooks/UseModal'

import '@/styles/Globals.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ Component }) => {
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
