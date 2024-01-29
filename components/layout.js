'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero/Hero'
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <>
      <Hero />
      {/* <Header /> */}

      <main>{children}</main>
      <Footer />
    </>
  )
}
