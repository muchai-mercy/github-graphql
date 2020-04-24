import { gql } from 'apollo-boost';

const userProfile = gql`
query User($username: String!) {
  user(login: $username) {
    bio
    avatarUrl
    name
    company
  }
}
`;

export default userProfile;
