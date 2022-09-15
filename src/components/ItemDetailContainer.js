import { useEffect, useState } from "react"
import customFecth from "../utils/customFetch"
import ItemDetail from "./ItemDetail"
import dataFromDB from "../utils/data"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material"
const ItemDetailContainer = () => {
    const [info, setInfo] = useState({});
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFecth(2000, dataFromDB.find(item => item.id == id))
        .then(result => setInfo(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id])
    return(
        <>
        <div className="juguetesCard">
        {
        loading ? <CircularProgress className="carga" /> :
        <ItemDetail item={info} />
}
</div>
        </>
    )
}
export default ItemDetailContainer