import { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material"
import{ collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"
const ItemDetailContainer = () => {
    const [info, setInfo] = useState({});
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFS = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return dataFromFS
        }
        firestoreFetch()
        .then(result => setInfo(result.find(item => item.id == id)))
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