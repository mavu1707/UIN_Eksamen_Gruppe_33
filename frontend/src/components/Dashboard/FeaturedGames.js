import React, { useEffect, useState } from 'react';
import GameCard from '../GameCardPage/GameCard';
import { Link } from 'react-router-dom';

export default function FeaturedGames({ favorites, addFavorite, removeFavorite }) {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&dates=2023-01-01,2023-05-19&page_size=3')
      .then((response) => response.json())
      .then((data) => {

        const newestGames = data.results.map((game) => ({
          ...game,
          slug: game.name.toLowerCase().replace(/ /g, '-'),
        }))
        
        setGames(newestGames)
      })
  }, [])

  return (
    <article className="featured-games">
      <Link to="/gameshop">
        <h1>Game Shop</h1>
      </Link>
      <div className="game-card-container">
        {games.map((game) => (
          <div key={game.id}>
            <Link to={`/game/${game.slug}`}>Game Info</Link>
            <GameCard
              title={game.name}
              genre={game.genres.map((genre) => genre.name).join(', ')}
              imageUrl={game.background_image}
              onAddToFavorites={() => addFavorite(game)}
              onRemoveFromFavorites={() => removeFavorite(game.id)}
              isFavorite={favorites && favorites.some((fav) => fav.id === game.id)}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
