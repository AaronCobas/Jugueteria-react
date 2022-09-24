import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"
const Cart = () =>{
    const { cartList, clear, removeProduct, totalProductsPrice} = useContext(CartContext)
    return(
        <>
        {cartList.length === 0 ?
        <div className="emptyCart">
            <h2>Tu carrito esta vacio!</h2>
            <Link to="/" ><Button variant= "contained">Compra ahora</Button></Link>
        </div>
    :
    <div>
        <h2 className="title"> Carrito </h2>
        {
            cartList.map((item) => 
            <div className="singleItem" key={item.item.id}>
                <h2>{item.item.title}</h2>
                <img src={item.item.image} className="imgCart" alt="" />
                <p>Cantidad: {item.count}</p>
                <h2>${item.item.price * item.count}</h2>
                <Button onClick={() => removeProduct(item.item.id)} variant= "contained" color="error" size="small">Borrar del carrito</Button>
            </div>)
            }
            <Button onClick={clear} variant="contained" color="error" size="large" >Borrar todo</Button>
            <div className="checkout">
                <h2>Total</h2>
                <h3>${totalProductsPrice()}</h3>
                <Button variant="contained" color="success" size="large">Comprar</Button>
            </div>
</div>}
        </>
    )
}
export default Cart;
