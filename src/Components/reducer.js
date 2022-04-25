import {
  SET_LOADING,
  SET_NEWS,
  DELETE_SINGLE,
  SET_SEARCH,
  SET_PAGE,
} from './actions';
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_NEWS:
      return {
        ...state,
        isLoading: false,
        news: action.payload.news,
        NumberOfPages: action.payload.NumberOfPages,
      };
    case DELETE_SINGLE:
      const newList = state.news.filter(
        (item) => item.objectID !== action.payload
      );
      return { ...state, news: newList };
    case SET_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case SET_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.NumberOfPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.NumberOfPages - 1;
        }
        return { ...state, page: prevPage };
      }
    default:
      throw new Error(`there is no action the type of ${action.type}`);
  }
};
