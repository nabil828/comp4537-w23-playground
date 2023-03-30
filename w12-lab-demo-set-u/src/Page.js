import React from 'react'

function Page({ pokemons, PAGE_SIZE, currentPage }) {
  // currentPage = 81
  // slice the pokemons array 
  // based on the current page and page size
  // and display them
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE
  pokemons = pokemons.slice(startIndex, endIndex)
  const x = (id) => {
    if (id < 10) {
      return '00'
    } else if (id < 100) {
      return '0'
    } else {
      return ''
    }
  }
  return (
    <div>
      {
        pokemons.map(pokemon => (
          <div key={pokemon.name.english}>
            <h1>{pokemon.name.english}</h1>
            <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${x(pokemon.id)}${pokemon.id}.png`} alt={pokemon.name.english} />
          </div>
        ))
      }
    </div>
  )
}

export default Page