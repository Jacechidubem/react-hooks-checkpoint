import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div
      className="movie-card"
      style={{
        width: "220px",
        margin: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>

      <Link to={`/movie/${movie.id}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
}

export default MovieCard;
