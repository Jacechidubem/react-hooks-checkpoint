import { useParams, Link } from "react-router-dom";
import "./MovieDescription.css";


function MovieDescription({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="description-page">
      <h1>{movie.title}</h1>
      <img
        src={movie.posterURL}
        alt={movie.title}
      />
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
      <iframe
        src={movie.trailerLink}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default MovieDescription;
