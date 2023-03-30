import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Dashboard from './Dashboard'


function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/login',
        {
          username: username,
          password: password
        })
      setAccessToken(res.headers['auth-token-access']);
      setRefreshToken(res.headers['auth-token-refresh']);
      setUser(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {
        (user) && <div>
          <h1>Welcome {user.username}</h1>
          <h2>Your email is {user.email}</h2>
          <Dashboard
            accessToken={accessToken}
            refreshToken={refreshToken}
            setAccessToken={setAccessToken}
          />
        </div>

      }
      {
        (!user) && <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit'>
            Login
          </button>

        </form>
      }

    </div>
  )
}

export default Login