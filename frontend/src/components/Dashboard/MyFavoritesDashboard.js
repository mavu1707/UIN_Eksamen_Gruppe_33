import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard';
import { Link } from 'react-router-dom';

export default function MyFavoritesDashboard() {
  const [favorites, setFavorites] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&genres=indie&page_size=4')
      .then((response) => response.json())
      .then((data) => {
        const indieGames = data.results.map(game => ({
          ...game,
          slug: game.name.toLowerCase().replace(/ /g, '-'),
          isFavorite: true // set isFavorite to true by default for all games
        }));
        setFavorites(indieGames);
        setGames(indieGames);
      });
  }, []);

  const handleFavoriteToggle = (id) => {
    const updatedFavorites = favorites.map((game) => {
      if (game.id === id) {
        return { ...game, isFavorite: !game.isFavorite };
      } else {
        return game;
      }
    });
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <article className="my-favorites-dashboard">
        <Link to="/myfavorites"><h2>My Favorites</h2></Link>
        <div className="game-card-container">
          {games.map((game) => (
            <Link to={`/game/${game.slug}`} key={game.id}>
              <GameCard
                id={game.id}
                title={game.name}
                genre={game.genres.map((genre) => genre.name).join(', ')}
                imageUrl={game.background_image}
                isFavorite={game.isFavorite}
                onFavoriteToggle={handleFavoriteToggle}
              />
            </Link>
          ))}
        </div>
      </article>
    </div>
  );
}
