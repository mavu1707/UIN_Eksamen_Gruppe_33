import React, { useState, useEffect } from 'react';

export default function GameCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      props.onAddToFavorites(props.game);
    } else {
      props.onRemoveFromFavorites(props.game);
    }
  };

  return (
    <article className="game-card">
      <h2>{props.title}</h2>
      <p>{props.genre}</p>
      <img src={props.imageUrl} alt={props.title} />
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </article>
  );
}
