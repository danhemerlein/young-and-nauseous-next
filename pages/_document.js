import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => (
  <Html>
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖤</text></svg>"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
      <Script src="/scripts/glslcanvas.min.js" strategy="beforeInteractive" />
      <Script src="/scripts/include.js" strategy="beforeInteractive" />
      <Script src="/scripts/record-frag.js" strategy="beforeInteractive" />
      <Script src="/scripts/canvas.js" strategy="beforeInteractive" />
    </body>
  </Html>
)

export default Document
