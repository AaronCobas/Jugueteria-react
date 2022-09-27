import { Button } from "@mui/material"
import React, {useState, useEffect} from "react";
const ItemCount = ({ handleAddCart, item}) => {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        setCount(0);
    },[])
    const handleAdd =() =>{
        if (count < item.stock) {
            setCount(count + 1);
        }
    }
    const handleRest = () => {
        if (count > 0) {
            setCount(count-1);
        }
    }
    return(
        <div className="item-count">
            <p>{count} items</p>
            <div className="addRestButtons">
            <Button variant= "contained" size="small" onClick={handleAdd}>+</Button>
            <Button variant= "contained" size="small" onClick={handleRest}>-</Button>
            </div>
            {
                count === 0
                ?<Button variant= "contained" disabled>Agregar al carrito</Button>
                :<Button variant= "contained" onClick={() => handleAddCart(count)}>Agregar al carrito</Button>
            }
        </div>
    )
}
export default ItemCount