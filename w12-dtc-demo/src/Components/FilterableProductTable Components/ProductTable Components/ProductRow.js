import React from 'react'
import './ProductRow.css'
function ProductRow({ item }) {
  return (
    <div>
      <div className={!item.stocked ? 'red' : ''}>
        {item.name}, {item.price}, {item.stocked ? "In Stock" : "Out of Stock"}
      </div>
    </div>
  )
}

export default ProductRow