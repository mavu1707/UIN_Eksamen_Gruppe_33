import Footer from "../components/Footer";
import Header from "./Headers";
import GameShop from './GameShop';
import MyGames from './MyGames';
import MyFavorites from './MyFavorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function Dashboard() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gameshop" element={<GameShop />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/myfavorites" element={<MyFavorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}
