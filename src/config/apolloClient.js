import { ApolloClient, InMemoryCache } from '@apollo/client'
import { endpoint } from './settings'

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache({ resultCaching: false }),
})

export default client
