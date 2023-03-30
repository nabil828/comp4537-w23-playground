import React from 'react'
import Search from './App Components/Search'
import Result from './App Components/Result'

//React Hooks
import { useState } from 'react'

function App() {
  const [weather, setWeather] = useState('')

  return (
    <div>
      <Search setWeather={setWeather} />
      <Result weather={weather} />
    </div>
  )
}

export default App