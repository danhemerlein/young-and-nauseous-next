'use client'
import localFont from '@next/font/local'

import AuthModal from '@/components/AuthModal'
import Footer from '@/components/Footer'

import Header from './Header'

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

const Layout = ({ children }) => (
  <>
    <main
      className={`${lack.variable} ${baroque.variable} bg-beige px-4 lg:px-24`}
    >
      <Header />
      {children}
      <AuthModal className={`${lack.variable} ${baroque.variable}`} />
      <Footer />
    </main>
  </>
)

export default Layout
