import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard';

export default function MyFavoritesDashboard() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&genres=racing&page_size=3`)
      .then((response) => response.json())
      .then((data) => {
        const favoriteGames = data.results;
        setGames(favoriteGames);
      })
  }, []);

  return (
    <article className="my-favorites-dashboard">
      <div className="game-card-container">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            genre={game.genres.map((genre) => genre.name).join(', ')}
            imageUrl={game.background_image}
          />
        ))}
      </div>
    </article>
  );
}
