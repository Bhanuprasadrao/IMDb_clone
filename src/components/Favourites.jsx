import React, { useState, useEffect } from "react";

const Favourites = ({ onRemoveClick }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const handleRemoveClick = (movie) => {
    const updatedFavourites = favourites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="favourites-container">
      <h2 className="favourites-title">My Favourite Movies</h2>
      {favourites.length === 0 ? (
        <p className="favourites-empty">You haven't added any favourite movies yet!</p>
      ) : (
        <div className="favourites-list">
          {favourites.map((movie) => (
            <div className="favourites-card" key={movie.imdbID}>
              <img
                src={movie.Poster}
                className="favourites-image"
                alt={movie.Title}
              />
              <div className="favourites-body">
                <h5 className="favourites-card-title">{movie.Title}</h5>
                <button
                  className="favourites-remove-btn"
                  onClick={() => handleRemoveClick(movie)}
                >
                  Remove from Favourites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
