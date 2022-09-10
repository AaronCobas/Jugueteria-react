import ItemCount from "../components/ItemCount";
import React, { useEffect, useState } from "react";
const ItemListContainer = (props) => {
    const [items, setItems] = useState(1)
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
    const handleAddCart = () => {
        alert(`Se agregaron ${items} objetos a tu carrito`)
    }
        useEffect(() => {
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=juguetes")
            .then(response => response.json())
            .then(response => console.log(response.results))
            .catch(err => console.log(err))
            }, []);
    return(
        <>
        <p>Mensaje de {props.test}</p>
        <div>
            <ItemCount 
            handleAdd={handleAdd}
            handleRest={handleRest}
            items={items}
            handleAddCart={handleAddCart}> </ItemCount>
        </div>
        </>
    )
}
export default ItemListContainer