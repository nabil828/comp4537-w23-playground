import React from 'react'
import "./style.css"

function Pagination({ pokemons, currentPage, setCurrentPage }) {
  const pageSize = 10;

  // Array(Math.ceil(pokemons.length / pageSize)).keys()

  return (
    <div>

      {
        (currentPage != 1) &&
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
        > Prev. </button>
      }

      {
        Array.from({
          length: Math.ceil(pokemons.length / pageSize)
        }, (_, i) => i).map((element) => (
          <button
            key={element}
            onClick={() => setCurrentPage(element + 1)}
            className={element + 1 === currentPage ? "btnActive" : ""}
          >
            {element + 1}
          </button>
        ))
      }
      <button> Next. </button>

    </div>
  )
}

export default Pagination