import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Result({ selectedTypes }) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemons(res.data)
    }
    fetchData()
  }, [])


  return (
    <div>
      {
        pokemons.map(pokemon => {
          if (selectedTypes.every(type => pokemon.type.includes(type))) {
            return (<div>
              <>
                pokemon.name.english
              </>
              {
                pokemon.type.map(type => <ul>
                  <li>
                    {type}
                  </li>
                </ul>)
              }
            </div>)
          }
        })
      }
    </div>
  )
}

export default Result