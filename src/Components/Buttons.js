import React from 'react';
import { useGlobalContext } from '../context';
const Buttons = () => {
  const { isLoading, page, NumberOfPages, setPageNumber } = useGlobalContext();
  return (
    <article className='buttons-container'>
      <button
        className='btn'
        disabled={isLoading}
        onClick={() => setPageNumber('dec')}
      >
        Prev
      </button>
      <p>
        {page + 1} of {NumberOfPages}
      </p>
      <button
        className='btn'
        disabled={isLoading}
        onClick={() => setPageNumber('inc')}
      >
        Next
      </button>
    </article>
  );
};

export default Buttons;
