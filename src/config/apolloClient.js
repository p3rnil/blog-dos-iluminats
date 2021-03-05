import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.GRAPHCMS_PROJECT_API,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        process.env.IS_PREVIEW
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ resultCaching: false }),
})

export default client
