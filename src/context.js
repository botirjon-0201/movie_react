import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const mainContext = createContext();

const initialState = {
  movies: [],
  loading: true,
};

export default function ContextProvider({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);

    value.searchMovies = (str, type = "all") =>{
        dispatch({type: 'SEARCH_MOVIES', payload: str})
    }



  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
}
