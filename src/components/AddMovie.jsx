import { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.posterURL) return;
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
      />
      <input
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
      />
      <input
        name="rating"
        type="number"
        placeholder="Rating (1–5)"
        value={newMovie.rating}
        onChange={handleChange}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
