import localFont from '@next/font/local'

import AppState from '@/components/AppState'
import AuthModal from '@/components/AuthModal'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
    <html>
      <body
        className={`${lack.variable} ${baroque.variable} bg-beige px-4 lg:px-24`}
      >
        <AppState>
          <main>
            <Header />
            {children}
            <AuthModal className={`${lack.variable} ${baroque.variable}`} />
            <Footer />
          </main>
        </AppState>
        <script defer src="/scripts/glslcanvas.min.js" />
        <script defer src="/scripts/include.js" />
        <script defer src="/scripts/record-frag.js" />
        <script defer src="/scripts/canvas.js" />
      </body>
    </html>
  )
}

export default RootLayout
