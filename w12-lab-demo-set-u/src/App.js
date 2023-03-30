import Page from './Page';
import Pagination from './Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const PAGE_SIZE = 10

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemons(response.data)
    }
    fetchData()
  }, [])

  return (
    <h1>
      <Page
        pokemons={pokemons}
        PAGE_SIZE={PAGE_SIZE}
        currentPage={currentPage}
        />
      <Pagination 
        pokemons={pokemons}
        PAGE_SIZE={PAGE_SIZE}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </h1>
  );
}

export default App;
