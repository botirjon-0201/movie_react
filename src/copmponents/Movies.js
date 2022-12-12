import { useContext } from "react";
import { MainContext } from "../context";
import Movie from "./Movie";

export default function Movies() {
  const { movies } = useContext(MainContext);

  return (
    <div className="movies">
      {movies && movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h1 style={{ width: "300%" }}>Not found such Movies!</h1>
      )}
    </div>
  );
}
