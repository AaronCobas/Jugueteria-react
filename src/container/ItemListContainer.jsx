import React, { useEffect, useState } from "react";
import Juguete from "../components/Juguete";
import dataFromDB from "../utils/data";
import customFecth from "../utils/customFetch";
import { CircularProgress } from "@mui/material"
import { useParams } from "react-router-dom"
const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
        useEffect(() => {
            if (id) {
                setLoading(true)
                customFecth(2000, dataFromDB.filter(item => item.categoryId == id))
                .then(result => setData(result))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            } else {
                setLoading(true)
                customFecth(2000, dataFromDB)
                .then(result => setData(result))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            }
            }, [id]);
    return(
        <>
        <div className="juguetesCard">
            {
                loading ? <CircularProgress className="carga" /> :
                data.map(item => (
                    <Juguete
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        stock={item.stock}
                        price={item.price}
                    />
                ))
            }
        </div>
        </>
    )
}
export default ItemListContainer