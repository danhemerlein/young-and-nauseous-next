import localFont from '@next/font/local'

import AppState from '@/components/AppState'
import AuthModal from '@/components/AuthModal'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScriptLoaded from '@/components/ScriptLoaded'

import '@/styles/Globals.css'

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

const RootLayout = async ({ children }) => {
  return (
    <html id="__next" className="hide-scrollbars">
      <body
        className={`${lack.variable} ${baroque.variable} bg-beige px-4 pt-4 lg:px-24 lg:pt-12`}
      >
        <AppState>
          <main>
            <Header />
            {children}
            <AuthModal className={`${lack.variable} ${baroque.variable}`} />
            <Footer />
          </main>
        </AppState>
        <ScriptLoaded />
      </body>
    </html>
  )
}

export default RootLayout
