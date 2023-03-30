import React from 'react'
import "./style.css"

function Pagination({ pokemons, PAGE_SIZE, setCurrentPage, currentPage }) {

  return (
    <div>
      {
        (currentPage != 1) && <button onClick={() => setCurrentPage(currentPage - 1)} > Prev </button>
      }
      {
        Array.from(
          { length: Math.ceil(pokemons.length / PAGE_SIZE) },
          (_, index) => index
        )
          .map((element) => (
            <button
              key={element}
              onClick={() => setCurrentPage(element + 1)}
              className={element + 1 === currentPage ? 'activeButton' : ''}
            >
              {element + 1}
            </button>
          ))

      }
      {
        (currentPage != 81) &&
        <button onClick={() => setCurrentPage(currentPage + 1)} > Next </button>
      }
    </div>
  )
}

export default Pagination