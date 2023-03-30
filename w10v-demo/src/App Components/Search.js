import React from 'react'
import axios from 'axios'
function Search(probs) {
  const { setWeather } = probs

  const getWeather = async (city) => {
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63f3c05bfc8de92422db12d6f77d759e&units=metric`
    const res = await axios.get(url)
    return res.data.main.temp
  }

  const textOnchange = async (e) => {
    const x = await getWeather(e.target.value)
    console.log(x);
    setWeather(x)
  }

  return (
    <div>
      <label htmlFor="x">Plz do so </label>
      <input id="x" type="text" placeholder='Enter a city' onChange={textOnchange} />
    </div>
  )
}

export default Search