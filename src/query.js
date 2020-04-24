import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { gql } from 'graphql.macro';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
  })
});


client.query({
  query: gql`
    query User {
      user(login: "muchai-mercy") {
        bio
        avatarUrl
        name
        company
      }
    }
  `
}).then(result => console.log('RESULT>>>>', result));;

export default client;
