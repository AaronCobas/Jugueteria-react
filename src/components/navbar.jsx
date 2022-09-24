import { Link } from "react-router-dom"
import CartWidget from './CartWidget';
const Navbar = () => {
    return(
        <>
        <header className="headerNavbar">
            <Link to="/">
            <h1>Juguetería</h1>
            </Link>
                <nav className="nav">
            <ul>
                <li>
                <Link to="/category/1">Niños</Link>
                </li>
                <li>
                <Link to="/category/2">Niñas</Link>
                </li>
                <li>
                <Link to="/category/3">Bebés</Link>
                </li>
            </ul>
        </nav>
        <Link to="/cart"><CartWidget></CartWidget></Link>
        </header>
        </>
    )
}
export default Navbar;