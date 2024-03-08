//FUNCOON NORMAL

function miFuncionNormal(){
    console.log("saludos desde mi funcion")
}

miFuncionNormal()

//FUNCION ASIGNADA A UNA VARIABLE

let miFuncionEnVariable = function (){
    console.log("saludos desde mi funcion asignada a variable")
}

miFuncionEnVariable()

//FUNCION FLECHA
//No se puede llamar antes de declarar

let miFuncionFlecha = () => {
    console.log("saludos desde mi funcion flecha")
}

miFuncionFlecha()

const miFuncionFlecha2 = () => { console.log("saludos desde mi funcion flecha2") }

miFuncionFlecha2()

const saludar = () => "Saludos desde mi funcion flecha"

console.log(saludar())

const regresaObjeto = () => ({nombre:"Juan", apelldio: "Perez"})

console.log(regresaObjeto())

const funcionConParametros = (mensaje) => console.log(mensaje)

funcionConParametros("Saludo con parametro")

//Si es solo un parametro no es necesario ()
const funcionConParametros2 = mensaje => console.log(mensaje)

funcionConParametros2("Saludo con parametro")