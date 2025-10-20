import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MovieList from "./components/Movielist";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDescription from "./pages/MovieDescription";
import darkKnightPoster from "./assets/images/darkKnight.jpg";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A journey through space and time to save humanity.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "Batman faces the Joker in Gotham City.",
      posterURL: darkKnightPoster,
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1>🎬 My Movie App</h1>
              <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
              <AddMovie addMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
