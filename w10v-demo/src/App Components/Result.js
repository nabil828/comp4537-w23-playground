import React from 'react'
import "./style.css"
const f = (weather) => {
  return (
    (weather > 5) ? <div>Hot</div> : <div>Cold</div>
  )
}
function Result(probs) {
  const { weather } = probs
  return (
    <>
      <div>Result {weather}</div>
      {(weather) && f(weather)}
    </>

  )
}

export default Result