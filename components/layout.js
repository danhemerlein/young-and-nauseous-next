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

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero/Hero'
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <>
      <main className={`${lack.variable} ${baroque.variable}`}>
        <Hero />
        {children}
        <Footer />
      </main>
    </>
  )
}
