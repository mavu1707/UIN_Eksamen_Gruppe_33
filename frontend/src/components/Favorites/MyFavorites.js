import React from 'react';
import GameCard from '../GameCard';

export default function MyFavorites({ games, favorites, onFavoriteToggle }) {
  const favoriteGames = games.filter((game) => favorites.includes(game.id));

  const handleFavoriteToggle = (id) => {
    onFavoriteToggle(id);
  };

  return (
    <div>
      <h1>My favorites</h1>
      <div className="game-card-container">
        {favoriteGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.name}
            genre={game.genres.map((genre) => genre.name).join(', ')}
            imageUrl={game.background_image}
            isFavorite={favorites.includes(game.id)}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
}
