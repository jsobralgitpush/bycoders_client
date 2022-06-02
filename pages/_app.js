import Head from 'next/head'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bycoders Challenge</title>
      </Head>

      <main>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  )
}

export default MyApp
