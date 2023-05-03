import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard';

export default function FeaturedGames() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&page_size=3')

      .then((response) => response.json())
      .then((data) => {
        const featuredGames = data.results;
        setGames(featuredGames);
      })
      
  }, [])

  return (
    <article className="featured-games">
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
