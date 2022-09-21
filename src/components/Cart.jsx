import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
const Cart = () =>{
    const { cartList, clear, removeProduct } = useContext(CartContext)
    return(
        <>
        <h2 className="title"> Carrito </h2>
        {
            cartList.map((item) => 
            <div className="singleItem">
                <h2>{item.item.title}</h2>
                <img src={item.item.image} className="imgCart" alt="" />
                <p>Cantidad: {item.count}</p>
                <h2>${item.item.price * item.count}</h2>
                <Button onClick={() => removeProduct(item.item.id)} size="small">Borrar del carrito</Button>
            </div>)
            }
            <Button onClick={clear} variant="contained" color="error" size="small" >Borrar todo</Button>
        </>
    )
}
export default Cart;