import {
  NEW_MOVIE_FULFILLED,
  NEW_MOVIE_REJECTED,
  NEW_MOVIE_PENDING,
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED
} from "../actions/newMovie";
const initialState = {
  error: {},
  fetching: false,
  done: false,
  movie: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_MOVIE_PENDING:
      return {
        ...state,
        fetching: true
      };
    case NEW_MOVIE_FULFILLED:
      return {
        ...state,
        fetching: false,
        done: true
      };
    case NEW_MOVIE_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    case FETCH_MOVIE_PENDING:
      return {
        ...state
      };
    case FETCH_MOVIE_FULFILLED:
      return {
        ...state,
        movie: action.payload
      };
    case FETCH_MOVIE_REJECTED:
      return {
        ...state
      };

    default:
      return state;
  }
};
