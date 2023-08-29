// Funciones de orden superior
// funciones que utilizan funciones sea en parametro y/o return

// Por return
function dx(caras){
    return function(){
        return parseInt(Math.random()*caras)+1
    }
}

const d20 = dx(20)
/* 
function d20(){
        return parseInt(Math.random()*20)+1
    }
*/
const d6 = dx(6)


// Funciones recursivas
// 6 factorial
// !6 = 6*5*4*3*2*1 = 720
function factorial(nro){
    if(nro===1){
        return 1
    }
    return nro * factorial(nro-1)
}

// console.log("return final", factorial(6))


// Por parámetro

// const numeros = [1, 2, 3, 4]

function porCadaUno(array, funcionP){
    for(let i = 0; i<array.length ; i++){
        funcionP(array[i])
    }
}

// porCadaUno(numeros, (x)=>{console.log(x*5)})

// Array
const productos = [
    {id:1, nombre:"manzana", precio: 100},
    {id:2, nombre:"pera", precio: 200},
    {id:3, nombre:"frutilla", precio: 300},
]

// forEach()
// productos.forEach((producto)=>{
//     console.log(`[${producto.id}] ${producto.nombre} --- $${producto.precio}`)
// })

// find()
function encotnrarManzana(elemento){
    return elemento.nombre === "manzana"
}

const busqueManzana = productos.find(encotnrarManzana)
/* 
const busqueManzana = productos.find((elemento)=>{
    return elemento.nombre === "manzana"
})

*/
// console.log(busqueManzana)
// filter()
const busquedaPrecio = productos.filter(function(producto){
    return producto.precio <= -150
})
// console.log(busquedaPrecio)

// some()
function existeId(identificar){
    const existencia = productos.some((elemento)=>{
        return elemento.id === identificar
    })
    return existencia
}

// console.log(existeId(2))
// console.log(existeId(5))

// map()
const numeros = [1, 2, 3, 4]
// console.log('numeros', numeros)

const copiaNumeros = numeros.map((elemento)=>{
    return elemento
})

// console.log(copiaNumeros)

// reduce(acumulador, elemento) 
function precioCarrito(carrito){
    let total = 0
    for(let i = 0; i<carrito.length; i++){
        total += carrito[i].precio
    }
    return total
}
// console.log(precioCarrito(productos))
let total = productos.reduce((acumulador, elemento)=>{
    return acumulador + elemento.precio
}, 0)


// Sort
productos.sort((elemento1, elemento2)=>{
    return elemento2.precio - elemento1.precio
})
// console.log(productos)

const numeritos =  [544, 21, 53, 123]
console.log(numeritos)
numeritos.sort((ele1, ele2)=>{
    return ele2 - ele1
})
console.log(numeritos)

// const booleanos = [true, true,  false, true, false]
// booleanos.sort((ele1, ele2)=>{
//     if(ele1&&ele2){
//         return -1
//     } else if(ele1||ele2){
//         return 1
//     }
//     return 0
// })

console.log(booleanos)

// menor a mayor
// mayor a menor