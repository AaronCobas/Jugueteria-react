import React, { useEffect, useState } from "react";
import Juguete from "../components/Juguete";
import { CircularProgress } from "@mui/material"
import { useParams } from "react-router-dom"
import{ collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"
const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
        useEffect(() => {
            const firestoreFetch = async () => {
                const querySnapshot = await getDocs(collection(db, "products"));
                const dataFromFS = querySnapshot.docs.map(document => ({
                    id: document.id,
                    ...document.data()
                }))
                return dataFromFS
            }
            if (id) {
                setLoading(true)
                firestoreFetch()
                .then(result => setData(result.filter(item => item.categoryId == id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            } else {
                setLoading(true)
                firestoreFetch()
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