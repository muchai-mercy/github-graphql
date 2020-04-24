import React, { useState } from 'react';
import userProfile from './query';
import { graphql, useQuery } from 'react-apollo';

const App = () => {
  const [username, setUsername] = useState('');

  const setValue = (e) => {
    setUsername(e.target.value);
  };

  const [allProfiles, setProfiles] = useState([]);

  const { refetch: getQueryResults } = useQuery(userProfile, {
    variables: {
      username: username
    }
  });

  const handleSubmit = async () => {
    const profile = await getQueryResults({
      variables: {
        username: username
      }
    });
    // to fix
    setProfiles([profile.data?.user || null, ...allProfiles]);
  };

  const removeCard = (user) => {
    allProfiles.splice(allProfiles.indexOf(user), 1)
    return setProfiles([...allProfiles]);
  };

  return (
    <div className="app">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e)
        setUsername('')
      }}
      >
        <input
            type='text'
            onChange={setValue}
            value={username}
            placeholder='Type github username'
        />
        <button onClick={handleSubmit}>Enter</button>
      </form>
      <div className="container">
      {allProfiles && allProfiles.map((user, index) => (
        <div key={index} className="card">
          <div className="holder">
            <img src={user.avatarUrl} alt='' />
            <button onClick={() => removeCard(user)}>Remove</button>
          </div>
          <p>{user.name}</p>
          {user.company ? <p>Company: {user.company}</p> : null}
          <p>{user.bio}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default graphql(userProfile)(App);
