import React from 'react'
import ProductRow from './ProductTable Components/ProductRow'
import ProductCategoryRow from './ProductTable Components/ProductCatergoryRow'
function ProductTable({ userInputs }) {

  const arr = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  // (userInputs.inStockOnly ? item.stocked : true)

  const categoryGotDisplayed = []
  const someFunction = (x) => {
    categoryGotDisplayed.push(x)
  }
  console.log(categoryGotDisplayed);
  return (
    <>
      {
        arr.map((item, index) => {
          return (
            <div key={item.name}>
              {
                (item.name.toLowerCase().includes(userInputs.searchText.toLowerCase()))
                &&
                (!userInputs.inStockOnly || (userInputs.inStockOnly && item.stocked))
                &&
                (
                  <>
                    {
                      (categoryGotDisplayed.indexOf(item.category) === -1) && <ProductCategoryRow cat={item.category} />
                    }
                    <ProductRow item={item} anotherProb="SomeValue" />
                  </>
                )
              }
              {
                someFunction(item.category)
              }
            </div>


          )


        })

      }
    </>
  )
}

export default ProductTable