// Define un array vacío con el nombre de productos.
// Crear una función para cargar elementos (productos) en un array. 
// La función debe evaluar si el elemento existe previamente en el array, y allí cargarlo, o no (avisando al usuario que ya existe el elemento).

// Ampliado 

// Utiliza los cuadros de diálogo Prompt() y Confirm().
// Se debe aplicar el método indexOf() o includes() para ver si el elemento a agregar existe o no. 
// Si no existe, entonces se deberá utilizar el método .push() para añadirlo.
// Si el elemento existe, se deberá notificar al usuario que no se puede agregar porque ya existe.
// Puedes agregar otro tipos de validaciones para asegurarte de que la información a agregar sea consistente (ej: que el usuario no agregue espacios en blanco, contenido vacío, etcétera).
// Crea esto dentro de while(), y pregunta al usuario mediante el uso de confirm() si desea seguir agregando elementos al array. 
// Solo cuando pulse cancelar, allí se deberá cortar la ejecución del alta de productos en array.

const productos = []

const verificarSiYaEsta = (producto)=>{
    return productos.includes(producto)
}

const agregarProductos = (producto)=>{
    const enProductos = verificarSiYaEsta(producto)
    if(enProductos){
        alert(`El producto ${producto} ya existe en la tienda`)
    } else {
        productos.push(producto)
        alert(`Se agrego ${producto} a la tienda`)
        console.log(productos)
    }
}

const app = ()=>{
    alert("Bienvenido al sistema de base de datos de la tienda")
    alert("Usted va a agregar productos a la tienda")
    let loop = confirm("¿Desea agregar un producto?")
    while(loop){
        const producto = prompt("Ingrese el nombre del producto a agregar").toLowerCase()
        agregarProductos(producto)
        loop = confirm("¿Desea intentar agregar otro producto?")
    }
    alert("Gracias por utilizar nuestro sistema")
}

app()