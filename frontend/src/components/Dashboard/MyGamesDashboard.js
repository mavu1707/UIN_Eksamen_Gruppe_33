import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard';
import { Link } from 'react-router-dom';

export default function MyGamesDashboard() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&genres=indie&page_size=4')
      .then((response) => response.json())
      .then((data) => {
        const indieGames = data.results.map(game => ({
          ...game,
          slug: game.name.toLowerCase().replace(/ /g, '-')
        }));
        setGames(indieGames);
      });
  }, []);

  return (
    <article className="my-games-dashboard">
    <Link to="/mygames"><h2>My Games</h2></Link>
      <div className="game-card-container">
        {games.map((game) => (
          <Link to={`/game/${game.slug}`} key={game.id}>
            <GameCard
              title={game.name}
              genre={game.genres.map((genre) => genre.name).join(', ')}
              imageUrl={game.background_image}
            />
          </Link>
        ))}
      </div>
    </article>
  );
}
