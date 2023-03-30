import React from 'react'

function Page({ pokemons, pageNumber }) {
  // slice the array based on the page number
  const pokemonsPerPage = 10;
  const startIndex = (pageNumber - 1) * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;
  pokemons = pokemons.slice(startIndex, endIndex);
  // <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/00${pokemon.id}.png`} alt={pokemon.name.english} />
  return (
    <div>
      {
        pokemons.map(pokemon => (
          <div key={pokemon.id}>
            <h1>{pokemon.name.english}</h1>
        
          </div>
        ))
      }
    </div>
  )
}

export default Page