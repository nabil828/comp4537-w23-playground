import React from 'react'
import ProductTable from './FilterableProductTable Components/ProductTable'
import SearchBar from './FilterableProductTable Components/SearchBar'
import { useState } from 'react'

function FilterableProductTable() {

  const [userInputsStateObject, setUserInputsStateObject] = useState({
    filterText: "",
    inStockOnly: false
  })

  return (
    <div>FilterableProductTable
      <SearchBar setUserInputsStateObject={setUserInputsStateObject} userInputsStateObject={userInputsStateObject} />
      <ProductTable userInputsStateObject={userInputsStateObject} />
    </div>
  )
}

export default FilterableProductTable