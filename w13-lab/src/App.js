import Search from './Search';
import FilteredPokemonsGrid from './FilteredPokemonsGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [types, setTypes] = useState([]);
  const [selection, setSelection] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json');
      setTypes(response.data.map(type => type.english));

      const response2 = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      setPokemons(response2.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Search
        types={types}
        selection={selection}
        setSelection={setSelection}
      />
      <FilteredPokemonsGrid
        selection={selection}
        pokemons={pokemons}
      />
    </>
  );
}

export default App;
