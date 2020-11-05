import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

function CharacterGrid({ loading, items }) {
  return (
    <>
      {loading ? <Spinner /> : <section className="cards">
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item} />
        ))}
      </section>}
    </>
  );
}

export default CharacterGrid;