// 🔶 Encontrar Nodos 🔶
// 🔹 document.getElementById 🔹
// const divAtrevido = document.getElementById("encontrame")
// console.log(divAtrevido)
// console.dir(divAtrevido)

// 🔹 document.getElementsByClassName 🔹
const divs = document.getElementsByClassName("rojo")
// console.log(divs)

// 🔹 document.getElementsByTagName 🔹

// 🔹 document.querySelector 🔹
const buscarQuery = document.querySelector(`ul.rojo`)
//  #encontrame
// console.log(buscarQuery)

// 🔹 document.querySelectorAll 🔹
const buscarQueryAll = document.querySelectorAll(`ul.rojo li`)
// console.log(buscarQueryAll)

// 🔶 Modificar Nodos 🔶
const divAtrevido = document.getElementById("encontrame")
// console.log(divAtrevido.classList)
// console.log(divAtrevido.className)
// console.log(divAtrevido.id)
// console.log(divAtrevido.innerText)
// console.log(divAtrevido.innerHTML)
divAtrevido.innerText = "Hola como estan"

// 🔶 Crear Nodos 🔶
divAtrevido.innerHTML=`
<button>click</button>
`

const pyth = document.createElement("li")
console.log(pyth)
pyth.innerText = "Python"
console.log(pyth.innerText)

buscarQuery.appendChild(pyth)


// 🔶 Eventos 🔶

const divEventos = document.getElementById("eventos")
divEventos.addEventListener("mouseenter",()=>{
    console.log("entraste")
})
divEventos.addEventListener("mouseleave",()=>{
    console.log("saliste")
})