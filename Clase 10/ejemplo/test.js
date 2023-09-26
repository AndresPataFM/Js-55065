const domListaproductos = document.getElementById("productos")
let productos = []

function mostrarDatos(productos){
    domListaproductos.innerHTML="";
    productos.forEach(elemento => {
        const li = document.createElement("li")
        li.innerText = elemento.nombre
        domListaproductos.appendChild(li)
    });
}

async function pedirDatos(){
    try{
        const datosSinProcesar = await fetch("./productos.json")
        const datos = await datosSinProcesar.json()
        productos=datos
        mostrarDatos(productos)
        // aca va todo lo que use productos
    } catch (e) {
        console.warn(e)
    }
}


pedirDatos()