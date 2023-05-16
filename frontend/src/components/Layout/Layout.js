import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GameShop from '../GameShop/GameShop';
import MyGames from '../MyGames/MyGames';
import MyFavorites from '../Favorites/MyFavorites';
import Dashboard from '../Dashboard/Dashboard';
import GamePage from '../GameCardPage/GamePage';
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
        <Route path="/game/:slug" element={<GamePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
