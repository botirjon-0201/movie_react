import React, { useEffect, useContext } from "react";
import { MainContext } from "../context";
import Loader from "../copmponents/Loader";
import Movies from "../copmponents/Movies";
import Search from "../copmponents/Search";

export default function Main() {
  const { setMovies, loading, setLoading } = useContext(MainContext);

  const searchMovies = (str, type) => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      });
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=panda`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      });
  }, []);

  return (
    <div className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Loader /> : <Movies />}
    </div>
  );
}
