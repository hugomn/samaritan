import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from 'lib/apollo'
import './index.css'
import { AppProps } from 'next/app'
import { AuthWrapper } from 'lib/auth'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}
