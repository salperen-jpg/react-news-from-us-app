import React, { useState, useReducer, useEffect, useContext } from 'react';
import { reducer } from './Components/reducer';
import {
  SET_LOADING,
  SET_NEWS,
  DELETE_SINGLE,
  SET_SEARCH,
  SET_PAGE,
} from './Components/actions';

const Api_EndPoint = 'http://hn.algolia.com/api/v1/search?';
const AppContext = React.createContext();
const initialState = {
  isLoading: true,
  news: [],
  query: 'sweden',
  page: 0,
  NumberOfPages: 0,
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteSingle = (objectID) => {
    dispatch({ type: DELETE_SINGLE, payload: objectID });
  };

  const setSearch = (query) => {
    dispatch({ type: SET_SEARCH, payload: query });
  };

  const setPageNumber = (value) => {
    dispatch({ type: SET_PAGE, payload: value });
  };

  const fetchNews = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: SET_NEWS,
            payload: {
              news: data.hits,
              NumberOfPages: data.nbPages,
            },
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews(`${Api_EndPoint}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{ ...state, deleteSingle, setSearch, setPageNumber }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
