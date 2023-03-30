import React, { Fragment } from 'react'
import "./style.css"
function Result(probs) {
  const { weather } = probs
  return (
    <>
      The weather is  {weather}
      {(weather > 5) && <div>Hot</div>}
    </>
  )
}

export default Result