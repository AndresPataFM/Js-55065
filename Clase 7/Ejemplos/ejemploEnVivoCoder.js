const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera']

function cargarDOM(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "www.mandafruta.com"
    const lista = document.querySelector("#listado")
    frutas.forEach(fruta =>{
        const li = document.createElement("li")
        li.innerText = fruta
        lista.appendChild(li)
    })
}

cargarDOM()