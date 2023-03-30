import React from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Report from './Report'

function Dashboard({ accessToken, refreshToken, setAccessToken = { setAccessToken }
 }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <ol>
        <li><Link to="/report/1">Report 1</Link></li>
        <li><Link to="/report/2">Report 2</Link></li>
        <li><Link to="/report/3">Report 3</Link></li>
      </ol>



      <Routes>
        <Route
          path="/report/1"
          element={<Report id={1}
            accessToken={accessToken}
            refreshToken={refreshToken}
            setAccessToken={setAccessToken}
          />} />
        <Route
          path="/report/2"
          element={<Report id={2}
            accessToken={accessToken}
            refreshToken={refreshToken}
            setAccessToken={setAccessToken}
          />} />
        <Route
          path="/report/3"
          element={<Report id={3}
            accessToken={accessToken}
            refreshToken={refreshToken}
            setAccessToken={setAccessToken}
          />} />

      </Routes>
    </div>
  )
}

export default Dashboard