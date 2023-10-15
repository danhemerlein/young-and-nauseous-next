'use client'

import Layout from '@/components/layout'
import { CartContext, useCartState } from '@/hooks/useCart'

export default function App({ Component }) {
  const cart = useCartState()

  return (
    <CartContext.Provider value={cart}>
      <Layout>
        <Component />
      </Layout>
    </CartContext.Provider>
  )
}
