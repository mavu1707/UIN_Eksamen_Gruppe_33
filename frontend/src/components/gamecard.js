import React, { useState } from 'react';

export default function GameCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      if (props.game) { // check if props.game is defined
        setFavorites([...favorites, { name: props.game.name, imageUrl: props.game.background_image }]); // add only the name and imageUrl to favorites
      }
    } else {
      setFavorites(favorites.filter(fav => fav.name !== props.game.name));
    }
    console.log(favorites);
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
