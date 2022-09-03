import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
    return(
        <>
        <header className="headerNavbar">
            <h1>Juguetería</h1>
                <nav className="nav">
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                <a href="">Productos</a>
                </li>
                <li>
                <a href="">Mis compras</a>
                </li>
            </ul>
        </nav>
        <a href=""><ShoppingCartIcon></ShoppingCartIcon></a>
        </header>
        </>
    )
}
export default Navbar;