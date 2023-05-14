import React, { useState, useEffect } from 'react';
import GameCard from '../GameCard';

export default function MyFavoritesDashboard() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (game) => {
    setFavorites([...favorites, game]);
  };

  const removeFavorite = (gameId) => {
    setFavorites(favorites.filter((fav) => fav.id !== gameId));
  };

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9')
      .then(response => response.json())
      .then(data => {
        setFavorites(data.results);
      })
      .catch(error => console.log(error));
  }, []);
  

  return (
    <article className='my-favorites-dashboard'>
      <h1>My Favorites</h1>
      <div className="game-card-container">
        {favorites.map((favorite) => (
          <GameCard
            key={favorite.id}
            game={favorite}
            name={favorite.name}
            imageUrl={favorite.background_image}
            onAddToFavorites={addFavorite}
            onRemoveFromFavorites={removeFavorite}
            isFavorite={favorites.some((fav) => fav.id === favorite.id)}
          />
        ))}
      </div>
    </article>
  );
}
