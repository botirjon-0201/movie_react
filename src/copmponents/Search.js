import React, { useContext } from "react";
import { MainContext } from "../context";

export default function Search(props) {
  const { searchMovies } = props;
  const { search, setSearch, type, setType } = useContext(MainContext);

  const handleKey = (evnt) => {
    if (evnt.key === "Enter" && search.length) {
      searchMovies(search, type);
    } else if (evnt.key === "Enter" && !search.length) {
      alert("Enter some text");
    }
  };

  const handleFilter = (evnt) => {
    setType(evnt.target.dataset.type);
    searchMovies(`${search ? search : "panda"}`, evnt.target.dataset.type); // ko'rish kerak
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search..."
          type="search"
          className="validate"
          value={search}
          onChange={(evnt) => setSearch(evnt.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search Movies
        </button>
      </div>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}
