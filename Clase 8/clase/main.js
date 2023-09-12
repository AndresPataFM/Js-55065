// console.log("A")

// setTimeout(function(){
//     console.log("B")
// }, 0);

// console.log("C")

// const idIntervalo = setInterval(()=>{
//     console.log("tick")
// }, 1000)

// console.log("idIntervalo", idIntervalo)

// setTimeout(()=>{
//     clearInterval(idIntervalo)
//     console.log("para")
// }, 5000)

// console.log("inicio")

// async function mostratDOM(){
//     try {
//         const productos = await fetch("../miniProyecto3/products.json")
//         const productos2 = await productos.json()
//         productos2.forEach((elemento)=>{
//             const div = document.createElement("div")
//             div.innerText = JSON.stringify(elemento)
//             document.body.append(div)
//         })
//     } catch(error){
//         console.error("Error: ",error)
//     } finally {
//         console.log("se termina el intento")
//     }
// }

// mostratDOM()
const a = fetch("../miniProyecto3/products.json")
.then((respuesta)=>{
    return respuesta.json()
})
.then(rta=>{
    console.table(rta)
})
.catch(error=>{
    console.warn(error)
})
console.log("inicia")

async function pedirDatos (){
    try {
        const datosSinProcesar = await fetch("./miniProyecto3/products.json")
        const datos = await datosSinProcesar.json()
        console.table(datos)
    } catch (e) {
        console.error("Error 404")
    }
}

pedirDatos()
console.log("termina")