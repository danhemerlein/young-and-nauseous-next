'use client'
import './globals.css'

import { CartContext, useCartState } from '@/hooks/useCart'

// export const metadata = {
//   title: 'young and nauseous',
//   description: 'young and nauseous',
// }

export default function RootLayout({ children }) {
  const cart = useCartState()

  return (
    <html lang="en">
      <CartContext.Provider value={cart}>
        <body className="bg-beige">{children}</body>
      </CartContext.Provider>
    </html>
  )
}
2
