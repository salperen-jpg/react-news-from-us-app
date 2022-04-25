import React from 'react';
import { useGlobalContext } from '../context';

const Single = ({
  objectID,
  author,
  points,
  title,
  url,
  num_comments,
  relevancy_score,
}) => {
  const { deleteSingle } = useGlobalContext();
  return (
    <div className='single'>
      <h2>{title}</h2>
      <h3 className='author'>{author}</h3>
      <p>
        <span className='points'> {points} </span> collected |
        <span className='comments'> {num_comments} </span> people commented
      </p>
      <p>Relevancy score is : {relevancy_score || <span> UNKNOWN</span>}</p>
      <div className='btn-container'>
        <a href={url} className='btn read' target='_blank' rel='noreferrer'>
          read more
        </a>
        <button
          type='button'
          className='btn delete'
          onClick={() => deleteSingle(objectID)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Single;
