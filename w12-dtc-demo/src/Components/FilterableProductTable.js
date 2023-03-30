import React from 'react'
import SearchBar from './FilterableProductTable Components/SearchBar'
import ProductTable from './FilterableProductTable Components/ProductTable'
import { useState } from 'react'

function FilterableProductTable() {


  const [userInputs, setUserInputs] = useState({
    searchText: '',
    inStockOnly: false
  })

  return (
    <>

      <h1>FilterableProductTable Component</h1>
      <SearchBar userInputs={userInputs} setUserInputs={setUserInputs}/>
      <ProductTable userInputs={userInputs}/>
    </>
  )
}

export default FilterableProductTable