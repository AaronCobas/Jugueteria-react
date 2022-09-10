import { Button } from "@mui/material"
const ItemCount = ({handleAdd, handleRest, items, handleAddCart}) => {
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