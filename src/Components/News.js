import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Single from './Single';
import Buttons from './Buttons';

const News = () => {
  const { isLoading, news } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <article className='news'>
        {news.map((item) => {
          return <Single key={item.objectID} {...item} />;
        })}
      </article>
      <Buttons />
    </>
  );
};

export default News;
