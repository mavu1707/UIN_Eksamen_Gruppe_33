import React, { useEffect, useState } from 'react';
import GameCard from '../GameCardPage/GameCard';
import { Link } from 'react-router-dom';

export default function MyGames() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&genres=puzzle&page_size=20')
      .then((response) => response.json())
      .then((data) => {
        const puzzleGames = data.results.map(game => ({
          ...game,
          slug: game.name.toLowerCase().replace(/ /g, '-')
        }))

        setGames(puzzleGames);
      })
  }, [])

  return (
    <article className="game-view">
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
