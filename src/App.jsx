import { useState } from "react";
import MovieList from "./components/Movielist";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";
import darkKnightPoster from "./assets/images/darkKnight.jpg";
function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time to save humanity.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rating: 4,
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker in Gotham City.",
      posterURL: darkKnightPoster,
      rating: 5,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
