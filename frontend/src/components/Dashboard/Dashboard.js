import React, { useEffect, useState } from 'react';
import FeaturedGames from './FeaturedGames';
import MyGamesDashboard from './MyGamesDashboard';
import MyFavoritesDashboard from './MyFavoritesDashboard';

export default function Dashboard() {
  const [indieGames, setIndieGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=5ccfb72ca6634a3bbf2e095d139c75c9&genres=indie&page_size=4')
      .then((response) => response.json())
      .then((data) => {
        const games = data.results.map(game => ({
          ...game,
          slug: game.name.toLowerCase().replace(/ /g, '-'),
          isFavorite: false
        }));
        setIndieGames(games);
      });
  }, []);

  return (
    <>
      <FeaturedGames />
      <div className='test'>
        <MyGamesDashboard />
        <MyFavoritesDashboard indieGames={indieGames} />
      </div>
    </>
  );
}
