'use client'
import localFont from '@next/font/local'

const lack = localFont({
  src: [
    {
      path: '../public/fonts/lack-regular.woff',
      style: 'normal',
    },
    {
      path: '../public/fonts/lack-italic.woff',
      style: 'italic',
    },
  ],
  variable: '--font-lack',
})

const baroque = localFont({
  src: [
    {
      path: '../public/fonts/young-baroque.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-baroque',
})

import Footer from '@/components/Footer'
import Hero from '@/components/Hero/Hero'
import AuthModal from '@/components/AuthModal'
import '@/styles/globals.css'
import Header from './Header'

export default function RootLayout({ children }) {
  return (
    <>
      <main
        className={`${lack.variable} ${baroque.variable} px-4 lg:px-24 bg-beige`}
      >
        <Header />
        <Hero />
        {children}
        <AuthModal className={`${lack.variable} ${baroque.variable}`} />
        <Footer />
      </main>
    </>
  )
}
