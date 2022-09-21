import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
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
        <Link to="/cart"><ShoppingCartIcon></ShoppingCartIcon></Link>
        </header>
        </>
    )
}
export default Navbar;