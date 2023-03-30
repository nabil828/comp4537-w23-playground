import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode';

function Report({ id, accessToken, setAccessToken, refreshToken }) {
  const [reportTable, setReportTable] = useState('');

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(async function (config) {
    // Do something before request is sent
    const decodedToken = jwt_decode(accessToken);
    if (decodedToken.exp < Date.now() / 1000) {
      console.log("refreshToken", refreshToken);
      const res = await axios.get('http://localhost:5000/requestNewAccessToken', {
        headers: {
          'auth-token-refresh': refreshToken
        }
      })
      setAccessToken(res.headers['auth-token-access']);
      config.headers['auth-token-access'] = res.headers['auth-token-access'];
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  useEffect(() => {
    const getReport = async () => {
      const res = await axiosJWT.get(
        `http://localhost:6001/report?id=${id}`,
        {
          headers: {
            'auth-token-access': accessToken
          }
        })
      setReportTable(res.data);
    }
    getReport();
  }, [id])


  return (
    <>
      Report {id}
      {reportTable && reportTable}
    </>
  )
}

export default Report