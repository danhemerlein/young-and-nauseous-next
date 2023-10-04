'use client'
import './globals.css'
import { Inter } from 'next/font/google'

import { CartContext, useCartState } from '@/hooks/useCart'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'young and nauseous',
//   description: 'young and nauseous',
// }

export default function RootLayout({ children }) {
  const cart = useCartState()
  return (
    <html lang="en" className="bg-beige">
      <CartContext.Provider value={cart}>
        <body className={inter.className}>{children}</body>
      </CartContext.Provider>
    </html>
  )
}
2
