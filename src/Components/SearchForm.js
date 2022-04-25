import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { query, setSearch } = useGlobalContext();

  return (
    <article className='search-form'>
      <form action='' className='my-form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='search-input'
          value={query}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search for news'
        />
      </form>
    </article>
  );
};

export default SearchForm;
