import Link from 'next/link'
import Navstyles from '../styles/Nav.module.css'


const NavBar = () => {
  return <nav className={Navstyles.nav}>
      <h1>MyCuisine</h1>
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
      </ul>
      
  </nav>;
};

export default NavBar;
