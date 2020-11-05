import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './component/Header';
import CharacterGrid from './component/CharacterGrid';
import Search from './component/Search';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchItems() {
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${query}`);

      setItems(result.data);
      setLoading(false);
    }

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={setQuery} />
      <CharacterGrid loading={loading} items={items} />
    </div>
  );
}

export default App;
