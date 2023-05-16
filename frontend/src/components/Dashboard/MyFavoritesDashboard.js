import React from 'react';
import GameCard from '../GameCardPage/GameCard';

export default function MyFavoritesDashboard({ favorites, removeFavorite }) {
  console.log(favorites);
  return (
    <article className="my-favorites-dashboard">
      <h1>My Favorites</h1>
      <div className="game-card-container">
      {favorites.map((favorites) => (
        <GameCard
          key={favorites.id}
          game={favorites}
          title={favorites.name}
          imageUrl={favorites.background_image}
          onRemoveFromFavorites={() => removeFavorite(favorites.id)}
          isFavorite={true}
        />
      ))}
    </div>
    </article>
  );
}
