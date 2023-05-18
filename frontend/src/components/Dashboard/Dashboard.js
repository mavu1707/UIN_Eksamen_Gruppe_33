import React, { useEffect, useState } from 'react';
import FeaturedGames from './FeaturedGames';
import MyGamesDashboard from './MyGamesDashboard';
import MyFavoritesDashboard from './MyFavoritesDashboard';

export default function Dashboard() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (game) => {
    setFavorites((prevFavorites) => [...prevFavorites, game])
  };

  const removeFavorite = (gameId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== gameId)
    )
  }

  return (
    <>
      <FeaturedGames favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />
      <div className='test'>
        <MyGamesDashboard favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
        <MyFavoritesDashboard favorites={favorites} removeFavorite={removeFavorite} />
      </div>
    </>
  );
}
