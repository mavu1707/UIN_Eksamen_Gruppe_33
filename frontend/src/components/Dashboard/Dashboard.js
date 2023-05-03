import Footer from "../Dashboard/Footer";
import Header from "../Dashboard/Headers"
import GameShop from '../GameShop/GameShop';
import MyGames from '../MyGames/MyGames';
import MyFavorites from '../Favorites/MyFavorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeaturedGames from "./FeaturedGames";


export default function Dashboard() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gameshop" element={<GameShop />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/myfavorites" element={<MyFavorites />} />
      </Routes>
      <FeaturedGames/>
      <Footer />
    </Router>
  );
}
