import GameCard from '../GameCardPage/GameCard';
import { Link } from 'react-router-dom';

export default function MyFavoritesDashboard({ favorites, removeFavorite }) {
  return (
    <article className="my-favorites-dashboard">
      <Link to="/myfavorites">
        <h1>My Favorites</h1>
      </Link>
      <div className="game-card-container">
        {favorites.map((favorite) => (
          <GameCard
            key={favorite.id}
            game={favorite}
            title={favorite.name}
            imageUrl={favorite.background_image}
            onRemoveFromFavorites={() => removeFavorite(favorite.id)}
            isFavorite={true}
          />
        ))}
      </div>
    </article>
  );
}
