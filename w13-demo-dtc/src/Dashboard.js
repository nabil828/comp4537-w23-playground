import React from 'react'
import Report from './Report';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function Dashboard({ accessToken, setAccessToken, refreshToken }) {

  return (
    <div>
      Dashboard
      <ul>
        <li><Link to="/report/1"> Report 1 </Link></li>
        <li><Link to="/report/2"> Report 2 </Link></li>
        <li><Link to="/report/3"> Report 3 </Link></li>
      </ul>


      <Routes>
        <Route
          path="/report/1"
          element={
            <Report
              id={1}
              accessToken={accessToken}
              setAccessToken={setAccessToken}
              refreshToken={refreshToken}
            />
          }
        />
        <Route path="/report/2" element={<Report id={2} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken={refreshToken} />} />
        <Route path="/report/3" element={<Report id={3} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken={refreshToken} />} />
      </Routes>

    </div>
  )
}

export default Dashboard