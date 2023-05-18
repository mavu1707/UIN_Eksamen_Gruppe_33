import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
    <Link to="/">
      <img className="Logo" src="../img/pixel_palace_logo.png" alt="Pixel Palace logo" />
    </Link>
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