import ItemCount from "../components/ItemCount";
import React, { useEffect, useState } from "react";
import Juguete from "../components/Juguete";
import dataFromDB from "../utils/data";
import customFecth from "../utils/customFetch";
const ItemListContainer = () => {
    const [data, setData] = useState([])
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
            customFecth(2000, dataFromDB)
            .then(result => setData(result))
            .catch(err => console.log(err))
            }, []);
    return(
        <>
        <div>
            <ItemCount 
            handleAdd={handleAdd}
            handleRest={handleRest}
            items={items}
            handleAddCart={handleAddCart}> </ItemCount>
        </div>
        <div>
            {
                data.map(item => (
                    <Juguete
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        stock={item.stock}
                    />
                ))
            }
        </div>
        </>
    )
}
export default ItemListContainer