import { useState } from "react";
import MovieList from "../components/Movielist";
import AddMovie from "../components/AddMovie";
import Filter from "../components/Filter";
import moviesData from "../data/movie";

function Home() {
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (title, rating) => {
    if (title !== null) setFilterTitle(title.toLowerCase());
    if (rating !== null) setFilterRating(Number(rating));
  };

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(filterTitle) && m.rating >= filterRating
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 My Movie App</h1>

      <Filter onFilter={handleFilter} />
      <AddMovie onAdd={handleAdd} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;
