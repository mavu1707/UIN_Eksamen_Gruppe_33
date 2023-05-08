import React, { useState } from 'react';

export default function GameCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    props.onFavoriteToggle(props.id);
  };

  return (
    <article className="game-card">
      <h2 className="game-card-title">{props.title}</h2>
      <p className="game-card-genre">{props.genre}</p>
      <img className="game-card-image" src={props.imageUrl} alt={props.title} />
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </article>
  );
}
