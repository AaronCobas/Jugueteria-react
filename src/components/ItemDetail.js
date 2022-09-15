import ItemCount from "./ItemCount"
const ItemDetail = ({ item }) => {
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
            <ItemCount />
            </div>
        </div>
    )
}
export default ItemDetail