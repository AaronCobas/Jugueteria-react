const products = ["1, 2, 3", "4, 5, 6"]
const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {// Para simular el retardo de backend
            resolve(products);
        }, 2000);
    })
}
export default getProducts
