import React from 'react'
import "./style.css"

function Pagination({ pokemons, PAGE_SIZE, setCurrentPage, currentPage }) {

  return (
    <div>
      {
        (currentPage != 1) && <button onClick={() => setCurrentPage(currentPage - 1)}> Prev.</button>
      }
      {
        Array.from({ length: Math.ceil(pokemons.length / PAGE_SIZE) }, (element, index) => index).map((number) => (
          <button
            key={number + 1}
            onClick={() => setCurrentPage(number + 1)}
            className={currentPage === number + 1 ? "buttonActive" : ""}
          >
            {number + 1}
          </button>
        ))

      }

      {
        (currentPage != 81) && <button onClick={() => setCurrentPage(currentPage + 1)}> Next.</button>
      }
    </div>
  )
}

export default Pagination