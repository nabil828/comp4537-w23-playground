import React from 'react'
import axios from 'axios'
function Search({ setWeather }) {

  const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63f3c05bfc8de92422db12d6f77d759e&units=metric`
    const res = await axios.get(url)
    return res.data.main.temp;
  }
  const textChanged = async (event) => {
    const x = await getWeather(event.target.value)
    setWeather(x)
  }
  return (
    <div>
      <input type="text" placeholder='Please enter a city name' onChange={textChanged} />
    </div>
  )
}

export default Search