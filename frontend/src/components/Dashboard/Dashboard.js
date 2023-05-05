import FeaturedGames from './FeaturedGames';
import MyGamesDashboard from './MyGamesDashboard';
import MyFavoritesDashboard from './MyFavoritesDashboard';

export default function Dashboard() {
  return (
    <>
      <FeaturedGames />
      <MyGamesDashboard />
      <MyFavoritesDashboard/>
    </>
  );
}
