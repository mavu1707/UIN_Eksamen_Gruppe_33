import Footer from './Footer';
import Header from './Header';
import GameShop from '../GameShop/GameShop';
import MyGames from '../MyGames/MyGames';
import MyFavorites from '../Favorites/MyFavorites';
import FeaturedGames from '../Dashboard/FeaturedGames';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Layout() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FeaturedGames />} />
        <Route path="/gameshop" element={<GameShop />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/myfavorites" element={<MyFavorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}
