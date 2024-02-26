import localFont from '@next/font/local'
import { Analytics } from '@vercel/analytics/react'

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
    <html id="__next" className="hide-scrollbars" lang="en">
      <head>
        <title>young and nauseous</title>
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@youngandnauseous" />
        <meta name="twitter:title" content="young and nauseous" />
        <meta
          name="twitter:description"
          content="young and nauseous online sample library"
        />

        <meta name="title" content="youngandnauseo.us" />
        <meta
          name="description"
          content="young and nauseous online sample library"
        />

        <meta property="og:title" content="dan hemerlein" />
        <meta
          name="og:description"
          content="young and nauseous online sample library"
        />

        <meta property="og:url" content="https://www.youngandnauseo.us/" />
        <meta
          property="og:image"
          content="https://young-and-nauseous-next-lake.vercel.app/images/angel-boy.jpg"
        />

        <meta
          name="twitter:image"
          content="https://young-and-nauseous-next-lake.vercel.app/images/angel-boy.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="A handfrawn illustration of Saturn."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖤</text></svg>"
        />
      </head>
      <body
        className={`${lack.variable} ${baroque.variable} bg-beige px-4 pt-4 lg:px-24 lg:pt-12`}
      >
        <AppState>
          <main>
            {process.env.NEXT_PUBLIC_SHOW_ACCOUNT_FEATURES === 'true' && (
              <Header />
            )}
            {children}
            {process.env.NEXT_PUBLIC_SHOW_ACCOUNT_FEATURES === 'true' && (
              <AuthModal className={`${lack.variable} ${baroque.variable}`} />
            )}
            <Footer />
          </main>
        </AppState>
        <ScriptLoaded />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
