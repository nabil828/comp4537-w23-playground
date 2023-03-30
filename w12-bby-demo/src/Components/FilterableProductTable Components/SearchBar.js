import React from 'react'

function SearchBar({ setUserInputsStateObject, userInputsStateObject }) {

  const callF1 = (e) => {
    setUserInputsStateObject({
      ...userInputsStateObject,
      filterText: e.target.value,
    })
  }
  const callF2 = (e) => {
    setUserInputsStateObject({
      ...userInputsStateObject,
      inStockOnly: e.target.checked,
    })
  }


  return (
    <div>
      <br />
      <input type="text" placeholder='Type a product name.. ' onChange={callF1} />
      <br />
      <br />
      <label htmlFor="xx"> Only show products in stock</label>
      <input id="xx" type="checkbox" onChange={callF2} />
      <br />
      <br />
    </div>
  )
}

export default SearchBar