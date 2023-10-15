'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
