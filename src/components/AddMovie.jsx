import { useState } from "react";

function AddMovie({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailerLink, setTrailerLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !posterURL) return alert("Please enter all fields!");

    const newMovie = {
      id: Date.now(), // ensures unique id
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
      trailerLink,
    };

    onAdd(newMovie);

    // reset form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailerLink("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        maxWidth: "400px",
        margin: "20px 0",
      }}
    >
      <h3>Add a New Movie</h3>

      <input
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        id="description"
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <input
        id="posterURL"
        name="posterURL"
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />

      <input
        id="rating"
        name="rating"
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <input
        id="trailerLink"
        name="trailerLink"
        type="text"
        placeholder="Trailer Embed Link"
        value={trailerLink}
        onChange={(e) => setTrailerLink(e.target.value)}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
