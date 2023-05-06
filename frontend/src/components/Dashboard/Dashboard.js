import FeaturedGames from './FeaturedGames';
import MyGamesDashboard from './MyGamesDashboard';
import MyFavoritesDashboard from './MyFavoritesDashboard';

export default function Dashboard() {
  return (
    <>
      <FeaturedGames />
      <div className='test'>
        <MyGamesDashboard />
        <MyFavoritesDashboard/>
      </div>
    </>
  );
}
