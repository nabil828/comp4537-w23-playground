
import Page from './Page'
import Pagination from './Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function getPokemons() {
      const res = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')

      setPokemons(res.data);


    }
    getPokemons();
  }, [])


  return (
    <>
      <Page
        pokemons={pokemons}
        pageNumber={pageNumber}
      />
      <Pagination
        pokemons={pokemons}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </>
  );
}

export default App;
