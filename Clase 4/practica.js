// objetos literales (15-20)

const auto = {
    color: "rojo",
    marca: "ferrari",
    rudeas: 4,
    kilometraje: 0,
    vendido: false,
    bocina: function(){
        console.log("beep beep")
    }
}

// console.log(auto)
// // objeto.propiedad
// console.log(auto.color)
// // objeto.metodo()
// auto.bocina()


// Arrays (15)

// declarar

// const lista = ["andres","juan", "diana", "emilia", "ezequiel" ]
// console.log(lista)
// acceder

// console.log(lista[2])

// lista[0]="Pepe"
// console.log(lista)

// length | largo

// console.log(lista.length)

// for(let i = 0; i<lista.length; i++){
//     console.log(`Bienvenido ${lista[i]}`)
// }

// const numeros = [0, 23, -35, 456, 654, 18, 24]
// console.log(numeros)
// function duplicarValornumeros(){
//     for(let i = 0; i<numeros.length;i++){
//         numeros[i] = numeros[i]*2 
//     }
// }
// console.log(numeros)

const curso = [
    {nombre:"andres", puesto:"profesor", presente: true},
    {nombre:"diana", puesto:"tutora adjunta", presente: true},
    {nombre:"esteban", puesto:"alumno", presente: false},
    {nombre:"kevin", puesto:"alumno", presente: true},
]
// console.log(curso)

// for(let i = 0; i<curso.length; i++){
//     console.log(curso[i].nombre)
//     console.log(curso[i].puesto)
//     console.log(curso[i].presente)
// }

// metodos (45)
const lista = ["andres","juan", "diana", "emilia", "ezequiel", "juan" ]
console.log(lista)

// Meter

// meter mal
// lista[8] = "pancracio"
// console.log(lista)

// push
// lista.push("ernesto")
// console.log('lista.push("ernesto")', lista)

// unshift
// lista.unshift("ernesto")
// console.log('lista.unshift("ernesto")', lista)

// Sacar

// Borrar mal
// console.log(delete lista[0])
// console.log("delete", lista)

// shift
// console.log(lista.shift())
// console.log('lista.shift()', lista)

// pop
// console.log(lista.pop())
// console.log('lista.pop()', lista)

// const turnos = []
// function agregarTurnos(){
//     const paciente = prompt("cual es su nombre")
//     turnos.push(paciente)
//     alert(`Su turno es ${turnos.length}`)
// }
// function llamarTurnos(){
//     const turno = lista.shift()
//     alert(`Es el turno de ${turno}`)
// }

// agregarTurnos()
// agregarTurnos()
// agregarTurnos()

// llamarTurnos()
// llamarTurnos()

// agregarTurnos()
// llamarTurnos()
// console.log(turnos)

// join
// console.log("join()", lista.join())
// console.log(lista)
// console.log("join(', ')", lista.join(', '))
// console.log("join('')", lista.join(''))

// const num2 = [1,34,34]
// console.log(num2.join())
// console.log([123, "Hola", true].join())

// console.log("join de objeto", curso.join())

// console.log(lista)
// === Break === (10)

// // indexOf
// console.log("indexOf()", lista.indexOf("juan"))
// console.log("indexOf()", lista.indexOf("nepomuceno"))
// console.log("lastIndexOf()", lista.lastIndexOf("juan"))

// // includes 
// console.log("includes()", lista.includes("juan"))
// console.log("includes()", lista.includes("nepomuceno"))

// function includesCasero(array){
//     const query = prompt("elemento a buscar si existe")
//     const queryIndex = array.indexOf(query)
//     return queryIndex !== -1
// }
// console.log(includesCasero(lista))


// sort
// console.log("sort", lista.sort())

const num3 = [12, 5, 24, 99 , 1194]

// console.log(num3)
// console.log(num3.sort())

// reverse
// console.log(lista.reverse().sort())

// console.log(lista.sort().reverse())

// For Of (5-10)
// for(let i = 0; i<lista.length; i+=2){
//     console.log(lista[i])
// }

for(nombre of lista){
    console.log(nombre)
}

// Micro

// Pre-Entrega
