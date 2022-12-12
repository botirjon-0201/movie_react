export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: payload.data,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: payload.str,
      };

    case "SET_TYPE":
      return {
        ...state,
        type: payload.str,
      };

    default:
      return state;
  }
}
