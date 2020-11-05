import React from 'react';

function Search({ getQuery }) {
  function handleChange(e) {
    getQuery(e.target.value);
  }

  return (
    <section className="search">
      <form>
        <input type="text" onChange={handleChange} className="form-control" placeholder="Search character" autoFocus />
      </form>
    </section>
  );
}

export default Search;