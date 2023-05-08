import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard';
import { Link } from 'react-router-dom';

export default function MyFavorites({ games, onFavoriteToggle }) {

  return (
    <article className="my-games">
      <div className="game-card-container">
        {games.map((game) => (
          <Link to={`/game/${game.slug}`} key={game.id}>
            <GameCard
              title={game.name}
              genre={game.genres.map((genre) => genre.name).join(', ')}
              imageUrl={game.background_image}
              isFavorite={game.isFavorite}
              onFavoriteToggle={() => onFavoriteToggle(game.id)}
            />
          </Link>
        ))}
      </div>
    </article>
  );
}
