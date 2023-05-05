import Footer from './Footer';
import Header from './Header';
import GameShop from '../GameShop/GameShop';
import MyGames from '../MyGames/MyGames';
import MyFavorites from '../Favorites/MyFavorites';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Layout() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<GameShop />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/myfavorites" element={<MyFavorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}
