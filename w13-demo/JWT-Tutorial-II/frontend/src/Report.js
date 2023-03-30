import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

function Report({ id, accessToken, refreshToken, setAccessToken }) {
  const [reportTable, setReportTable] = useState('');
  const axiosJWT = axios.create()


  axiosJWT.interceptors.request.use(
    async config => {
      const currentDate = new Date();
      const decodedToken = jwt_decode(accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const res = await axios.post('http://localhost:5000/requestNewAccessToken', {
          headers: {
            'auth-token-refresh': refreshToken
          } 
        })
        const newAccessToken  = res.data
        setAccessToken(newAccessToken);
        config.headers["auth-token-access"] = newAccessToken;
      }
      return config;
    },
    error => {
      Promise.reject(error)
    });
    




  useEffect(() => {
    async function getReport() {
      try {
        console.log(accessToken);
        const res = await axiosJWT.get(`http://localhost:6001/report?id=${id}`, {
          headers: {
            'auth-token-access': accessToken
          }
        })
        setReportTable(res.data);
      }
      catch (err) {
        console.log(err)
      }
    }
    getReport();
  }, [id])


  return (
    <>
      <div> Report {id}</div>
      <div> {reportTable && reportTable}</div>
    </>
  )
}

export default Report