console.log("Script agregado correctamentes")

class Persona {
    constructor (nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }

    getNombre(){
        return this._nombre
    }

    getApelldio(){
        return this._apellido
    }

    setNombre(nombre){
        this._nombre = nombre
    }

    setApellido(apellido){
        this._apellido = apellido
    }

}
let listadoPersonas = new Array

function agregar(){
    const $forma = document.getElementById("forma")
    let $nombre = $forma["nombre"].value
    let $apellido = $forma["apellido"].value
    if($nombre != "" || $apellido != ""){
        let person = new Persona($nombre, $apellido)
        listadoPersonas.push(person)  
        mostrarPersonas()
    }
    
}

function mostrarPersonas(){
    let $listado = document.getElementById("listado")

    for(let persona of listadoPersonas){
        let newLiPerson = document.createElement("li") 
        newLiPerson.innerHTML = persona._nombre + " " + persona._apellido
        $listado.appendChild(newLiPerson)
    }
    listadoPersonas.shift();
}

///con bugggg