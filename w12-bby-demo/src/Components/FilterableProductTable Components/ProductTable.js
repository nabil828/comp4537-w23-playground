import React from 'react'
import ProductCategoryRow from './ProductTable Components/ProductCategoryRow'
import ProductRow from './ProductTable Components/ProductRow'

function ProductTable({ userInputsStateObject }) {

  const arr = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  // (!userInputsStateObject.inStockOnly || item.stocked)
  const visitedCAtegory = []

  const dummyF = (x) => {
   const tt = visitedCAtegory.push(x)
  }
  return (
    <div>
      {
        arr.map((item, index) => {
          return (
            <>
              {
                (visitedCAtegory.indexOf(item.category) === -1) && <ProductCategoryRow cat={item.category} />
              }
              {
                (item.name.toLowerCase().includes(userInputsStateObject.filterText.toLowerCase()))
                &&
                (userInputsStateObject.inStockOnly ? item.stocked : true)
                &&
                <ProductRow key={item.name} item={item} />
              }

              {
                dummyF(item.category)
              }
            </>
          )
        })
      }
    </div>
  )
}

export default ProductTable