import React, { useState } from 'react';
import GameCard from '../GameCard';

export default function MyFavoritesDashboard() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (game) => {
    setFavorites([...favorites, game]);
  };

  const removeFavorite = (gameId) => {
    setFavorites(favorites.filter((fav) => fav.id !== gameId));
  };

  return (
    <section>
      <h1>My Favorites</h1>
      <div className="game-card-container">
        {favorites.map((favorite) => (
          <GameCard
            key={favorite.id}
            game={favorite}
            onAddToFavorites={addFavorite}
            onRemoveFromFavorites={removeFavorite}
          />
        ))}
      </div>
    </section>
  );
}
