import 'inter-ui/inter.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZZCHQ9Q3QT" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZZCHQ9Q3QT');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
