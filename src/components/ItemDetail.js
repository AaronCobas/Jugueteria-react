import ItemCount from "./ItemCount"
import { Link} from "react-router-dom"
import React, {  useState } from "react"
import { Button } from "@mui/material"
const ItemDetail = ({ item }) => {
    const [items, setItems] = useState(0)
    const handleAddCart = (items) => {
        alert(`Se agregaron ${items} objetos a tu carrito`);
        setItems(items);
    }
    return(
        <div className="itemDetail">
            <h1 id="itemDetail_title">{item.title}</h1>
            <img id="itemDetail_image" alt={item.title} src={item.image}></img>
            <div id="itemDetail_description">
            <p>{item.detailed_description}</p>
            <p>Stock: {item.stock}</p>
            <p>Id: {item.id}</p>
            <h2>Precio: ${item.price}</h2>
            </div>
            <div id="itemDetail_itemcount">
                {
                    items === 0
                    ? <ItemCount handleAddCart={handleAddCart} item={item} />
                    : <Link to="/cart" ><Button variant= "contained">Ir al carrito</Button></Link>
                }
            </div>
        </div>
    )
}
export default ItemDetail