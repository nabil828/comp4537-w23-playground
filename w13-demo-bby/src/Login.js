import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Dashboard from './Dashboard'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [user, setUser] = useState({})

  const onClickHandle = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:5000/login',
      {
        username: username,
        password: password
      })
    setUser(res.data)
    setAccessToken(res.headers["auth-token-access"])
    setRefreshToken(res.headers["auth-token-refresh"])
  }

  return (
    <div>
      {
        (accessToken && user?.role === "admin") &&
        <Dashboard
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          refreshToken={refreshToken}
        />
      }
      {
        (!accessToken) &&
        <form onSubmit={onClickHandle}>
          <input
            type="text"
            placeholder='username'
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <input
            type="password"
            placeholder='password'
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <button type="submit">Login</button>
        </form>
      }
    </div>
  )
}

export default Login