import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <h1><Link to="/" >Pixel Palace</Link></h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <nav className={showMenu ? 'show' : ''}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/gameshop" onClick={toggleMenu}>Game Shop</Link></li>
          <li><Link to="/mygames" onClick={toggleMenu}>My Games</Link></li>
          <li><Link to="/myfavorites" onClick={toggleMenu}>Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
} 