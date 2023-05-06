import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard';

export default function MyGamesDashboard() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&genres=puzzle&page_size=4')
      .then((response) => response.json())
      .then((data) => {
        const puzzleGames = data.results;
        setGames(puzzleGames);
      });
  }, []);

  return (
    <article className="my-games-dashboard">
    <h1>My Games</h1>
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
