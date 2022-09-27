import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Swal from 'sweetalert2'
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () =>{
    const { cartList, clear, removeProduct, totalProductsPrice} = useContext(CartContext)
    const createOrder = async () => {
        let itemsforDB = cartList.map(item => ({
            id: item.item.id,
            price: item.item.price,
            title: item.item.title,
            quantity: item.count,
        }))
        let order = {
            buyer: {
                name: "Nombre de Prueba",
                email: "email@prueba.com",
                phone: "1234-5678",
            },
            date: serverTimestamp(),
            items: itemsforDB,
            total: totalProductsPrice(),
        }
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order);
        cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.count)
            })
        })
        Swal.fire({
            title: 'Compra realizada con éxito!',
            text: 'Id: ' + newOrderRef.id,
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        clear()
    }
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
                <Button onClick={() => removeProduct(item.item.id)} variant= "contained" color="error" size="small"><DeleteIcon /></Button>
            </div>)
            }
            <Button onClick={clear} variant="contained" color="error" size="large" >Borrar todo</Button>
            <div className="checkout">
                <h2>Total</h2>
                <h3>${totalProductsPrice()}</h3>
                <Button onClick={createOrder} variant="contained" color="success" size="large">Comprar</Button>
            </div>
</div>}
        </>
    )
}
export default Cart;
