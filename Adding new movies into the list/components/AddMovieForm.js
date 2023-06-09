import React, { useState } from "react";
import './AddMovieForm.css';

const AddMovieForm = (props) => {
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    openingText: "",
    releaseDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const addMovieHandler = (event) => {
    event.preventDefault();
    props.onAddMovie(newMovie);
    setNewMovie({
      id: "",
      title: "",
      openingText: "",
      releaseDate: "",
    });
  };

  return (
    <form onSubmit={addMovieHandler}>
      <div className="form-group">
        <label typeof="text" className="form-label">ID: </label>
        <input
          type="text"
          name="id"
          value={newMovie.id}
          onChange={handleInputChange}
          placeholder="ID"
        />
      </div>

      <div className="form-group">
        <label typeof="text" className="form-label">Title: </label>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <label typeof="text" className="form-label">Opening Text: </label>
        <input
          type="text"
          name="openingText"
          value={newMovie.openingText}
          onChange={handleInputChange}
          placeholder="Opening Text"
        />
      </div>

      <div className="form-group">
        <label typeof="text" className="form-label">Release Date: </label>
        <input
          type="text"
          name="releaseDate"
          value={newMovie.releaseDate}
          onChange={handleInputChange}
          placeholder="Release Date"
        />
      </div>

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
