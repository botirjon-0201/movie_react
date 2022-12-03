export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div key={imdbID} className="card">
      <div className="card-image">
        <img src={Poster} alt="movie" />
      </div>
      <div className="card-content">
        <span className="card-title">{Title}</span>
      </div>
      <div className="card-action">
        <span>{Year}</span>
        <span className="right">{Type}</span>
      </div>
    </div>
  );
}
