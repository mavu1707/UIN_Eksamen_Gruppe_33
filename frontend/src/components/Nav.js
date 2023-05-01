import { Link } from 'react-router-dom';

export default function Nav(){
  return(
    <nav>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/gameshop" >Game Shop</Link></li>
      <li><Link to="/mygames" >My Games</Link></li>
      <li><Link to="/myfavorites" >Favorites</Link></li>
    </nav>
  )
}