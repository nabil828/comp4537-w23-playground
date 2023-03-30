import React from 'react'
import "./style.css"
function Result(probs) {
  const { weather } = probs

  const f = (x) => {
    return (
      (x > 5) ? <div>Hot</div> : <div>Cold</div>
    )
  }

  return (
    <div>
      <h1>Result </h1>
      {weather}
      {(weather) && f(weather)}
    </div>
  )
}

export default Result