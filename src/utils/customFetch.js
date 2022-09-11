let boolean = true
let customFecth = (time, array) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (boolean) {
                resolve(array)
            } else {
                reject("error")
            }
        }, time)
    })
}
export default customFecth