import React from 'react'

function SearchBar({ userInputs, setUserInputs }) {

  const callF = (e) => {
    setUserInputs({
      ...userInputs,
      searchText: e.target.value
    })
  }

  const callF2 = (e) => {
    setUserInputs({
      ...userInputs,
      inStockOnly: e.target.checked
    })
  }


  return (
    <div>
      <label htmlFor="x">Type the product name ...</label>
      <input id="x" type="text" placeholder='Product name goes here..' onChange={callF} />
      <br />
      <br />

      <label htmlFor="y">Only show products in stock</label>
      <input id="y" type="checkbox" onChange={callF2} />
      <br />
      <br />
    </div>
  )
}

export default SearchBar


