import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Script strategy="afterInteractive"
     src="https://www.googletagmanager.com/gtag/js?id=G-5P6ZKW8XHT" 
     />

     <Script id='google-analytics' strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5P6ZKW8XHT');
      `}
     </Script>
    
    <Component {...pageProps} />
  </div>

  );
}

export default MyApp 
