import '../client/components/app.css'


import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'
import { TransactionsProvider } from "./../context/TransactionContext";



function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://ezjwwjkg8qke.usemoralis.com:2053/server'
      appId='ePQKXT7CsmzgQzh3dd0shpresrS7Nz2UQe9gHfuh'
    >
      <TransactionsProvider>
      
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
      </TransactionsProvider>
    </MoralisProvider>
  )
}

export default MyApp;