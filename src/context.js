import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const MainContext = createContext();

const initialState = {
  movies: [],
  loading: true,
  search: "",
  type: "all",
};

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  state.setMovies = (data) => {
    dispatch({ type: "SET_MOVIES", payload: { data } });
  };

  state.setLoading = (boolen) => {
    dispatch({ type: "SET_LOADING", payload: boolen });
  };

  state.setSearch = (str) => {
    dispatch({ type: "SET_SEARCH", payload: { str } });
  };

  state.setType = (str) => {
    dispatch({ type: "SET_TYPE", payload: { str } });
  };

  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
}
