import React from 'react'

function FilteredPokemonsGrid({ selection, pokemons }) {
  return (
    <div>
      {
        pokemons.map(pokemon => {
          if (pokemon.type.some(type => selection.includes(type))) {
            return (
              <div key={pokemon.id}>
                <p>{pokemon.name.english}</p>
              </div>
            )
          }
        }
        )

      }
    </div>
  )
}



export default FilteredPokemonsGrid