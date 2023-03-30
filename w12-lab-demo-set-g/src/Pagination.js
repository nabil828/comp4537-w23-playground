import React from 'react'
import "./style.css"

function Pagination({ pokemons, setPageNumber, pageNumber}) {
  const pageSize = 10;
  const pagesCount = Math.ceil(pokemons.length / pageSize);

  return (
    <div>
      {
        Array.from({ length: pagesCount }, (_, index) => index + 1).map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setPageNumber(index + 1)}
              className={index + 1 === pageNumber ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        })
      }
    </div>
  )
}

export default Pagination