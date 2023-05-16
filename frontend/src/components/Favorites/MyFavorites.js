import React, { useState } from 'react';
import GameCard from '../GameCardPage/GameCard';

export default function MyFavorites() {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (game) => {
    if (!favorites.includes(game)) {
      setFavorites([...favorites, game]);
    } else {
      setFavorites(favorites.filter((fav) => fav !== game));
    }
  };

  return (
    <section>
      <h1>My Favorites</h1>
      <div className="game-card-container">
        {favorites.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            genre={game.genres.map((genre) => genre.name).join(', ')}
            imageUrl={game.background_image}
            isFavorite={true}
            handleFavoriteClick={() => handleFavoriteClick(game)}
          />
        ))}
      </div>
    </section>
  );
}
