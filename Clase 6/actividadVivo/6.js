class Hamburguesa{
    constructor(nombre, precio, ingredientes, nroCombo){
        this.nombre = nombre
        this.precio = parseFloat(precio).toFixed(2)
        this.ingredientes = ingredientes
        this.nroCombo = nroCombo
    }
}
const hamburguesas=[]

const agreegarHamburguesa = (nombre, precio, ingredientes, nroCombo)=>{
    hamburguesas.push(new Hamburguesa(nombre, precio, ingredientes, nroCombo))
}
agreegarHamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
agreegarHamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
agreegarHamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
agreegarHamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso', 'Aderezo'], 4)
agreegarHamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
agreegarHamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
agreegarHamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
agreegarHamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)

console.log(hamburguesas)
const resultadoaumento = hamburguesas.map(hamburguesa=>{
    return new Hamburguesa(hamburguesa.nombre, hamburguesa.precio * 1.11, hamburguesa.ingredientes, hamburguesa.nroCombo)
})
console.table(resultadoaumento)