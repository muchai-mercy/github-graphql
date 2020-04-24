import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const App = ({data: { loading, user }}) => loading ? [] : (
  <div className="App">
    <div>
      {user.name}
    </div>
    <div>
      {user.bio}
    </div>
    <div>
      {user.company}
    </div>
  </div>
  );

const user = gql`
query {
  user(login: "muchai-mercy") {
    bio
    avatarUrl
    name
    company
  }
}
`;

export default graphql(user)(App);
