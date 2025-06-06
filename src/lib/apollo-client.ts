import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://bookapp-backend-uhxp.onrender.com'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client; 