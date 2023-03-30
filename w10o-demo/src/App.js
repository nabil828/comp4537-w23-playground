import React from 'react'
import Search from './Search'
import Result from './Result'
import { useState } from 'react'

function App() {
  const [weather, setWeather] = useState('')
  return (
    <div>
      <Search setWeather={setWeather} x="y" />
      <Result weather={weather} />
    </div>
  )
}

export default App