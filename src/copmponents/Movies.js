import Movie from "./Movie";

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h1 style={{width: "300%"}}>Not found such Movies!</h1>
      )}
    </div>
  );
}
