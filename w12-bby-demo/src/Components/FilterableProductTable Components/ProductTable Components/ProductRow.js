import React from 'react'
import "./ProductRow.css"

function ProductRow({ item }) {
  return (
    <div className={!item.stocked ? "red" : ""}>
      {item.name}, {item.price}, {item.stocked ? "Yes, in stock" : "No, not in stock"}
    </div>
  )
}

export default ProductRow