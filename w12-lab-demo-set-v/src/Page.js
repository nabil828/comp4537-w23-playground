import React from 'react'

function Page({ pokemons, currentPage }) {
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPokemons = pokemons.slice(startIndex, endIndex)
  //     < img
  //   src = {`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/00${pokemon.id}.png`
  // }
  // alt = { pokemon.name.english } />
  return (
    <div>
      {
        currentPokemons.map(pokemon => (
          <div key={pokemon.id}>
            <>{pokemon.name.english}</>
          </div>
        ))
      }
    </div>
  )
}

export default Page