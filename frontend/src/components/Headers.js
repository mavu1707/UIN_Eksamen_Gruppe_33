import Nav from "./Nav"
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <header>
      <h1><Link to="/" >Pixel Palace</Link></h1>
      <Nav></Nav>
    </header>
  )
}