
import React, { Fragment } from 'react'
import Search from './App Components/Search'
import Result from './App Components/Result'
import { useState } from 'react'

function App() {
  const [weather, setWeather] = useState('')

  return (
    <>
      <Search setWeather={setWeather} />
      <Result weather={weather} />
    </>
  )
}

export default App