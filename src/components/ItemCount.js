import { Button } from "@mui/material"
import React, {  useState } from "react";
const ItemCount = () => {
    const [items, setItems] = useState(1)
    const handleAddCart = () => {
        alert(`Se agregaron ${items} objetos a tu carrito`)
    }
    const handleAdd =() =>{
        if (items < 5) {
            setItems(items+1);
        } else {
            console.log("error")
        }
    }
    const handleRest = () => {
        if (items > 0) {
            setItems(items-1);
        } else {
            console.log("error2")
        }
    }
    return(
        <div className="item-count">
            <p>{items} items</p>
            <div className="addRestButtons">
            <Button variant= "contained" size="small" onClick={handleAdd}>+</Button>
            <Button variant= "contained" size="small" onClick={handleRest}>-</Button>
            </div>
            <Button variant= "contained" onClick={handleAddCart}>Agregar al carrito</Button>
        </div>
    )
}
export default ItemCount