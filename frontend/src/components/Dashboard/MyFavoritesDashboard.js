import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyFavorites from '../Favorites/MyFavorites';

export default function MyFavoritesDashboard({ indieGames }) {
  const [favorites, setFavorites] = useState(indieGames.slice(0, 4));
  const [games, setGames] = useState([]);

  const handleFavoriteToggle = (id) => {
    const updatedGames = games.map((game) => {
      if (game.id === id) {
        return { ...game, isFavorite: !game.isFavorite };
      } else {
        return game;
      }
    });
    setGames(updatedGames);

    const updatedFavorites = updatedGames.filter((game) => game.isFavorite);
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9')
      .then((response) => response.json())
      .then((data) => {
        const favoriteGames = data.results.filter((game) => favorites.includes(game.id)).map((game) => ({
          ...game,
          slug: game.name.toLowerCase().replace(/ /g, '-'),
          isFavorite: true
        }));
        setGames(favoriteGames);
      });
  }, [favorites]);

  return (
    <div>
      <article className="my-favorites-dashboard">
        <Link to="/myfavorites"><h2>My Favorites</h2></Link>
        <MyFavorites games={games} onFavoriteToggle={handleFavoriteToggle} />
      </article>
    </div>
  );
}
