import MovieCard from "./Moviecard";

function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id || movie.title} movie={movie} />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;
