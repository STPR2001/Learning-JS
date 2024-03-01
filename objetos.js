//Creacion de objeto tipica
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.apellido);
console.log(persona.nombreCompleto());

//Creacion de objeto dinamica
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.apellido = "Rodriguez";
persona2.direccion = "Jaime ross";
persona2.tel = "123456";

console.log(persona2.nombre);
//Otra manera de acceder a los datos del objeto
console.log(persona2["apellido"]);

//for in
for( propiedad in persona2){
    console.log(propiedad);
    //acceder al valor
    console.log(persona2[propiedad])
}

//Agregar, modificar y eliminar propiedades al objeto
persona.tel = "21221";
persona.tel = "123"
console.log(persona.tel);
delete persona.tel;
console.log(persona.tel);

//distinas formas de impirmir un objeto
console.log(persona);
    //concatenar valores
    console.log(persona.nombre + " " + persona.apellido);
    //for in
    for(propiedad in persona){
        console.log(propiedad);
        console.log(persona[propiedad]);
    }
    // Another way
    let personaArray = Object.values(persona);
    console.log(personaArray);
    // Another way
    let personaString = JSON.stringify(persona);
    console.log(personaString);


//Metodos get y set
let persona3 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang){
        this.idioma = lang.toUpperCase();
    } ,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona3.nombreCompleto);
console.log(persona3.idioma);
console.log(persona3.lang);

persona3.lang = "mx";
console.log(persona3.lang);

//Constructor de objetos
function Persona4(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
};

let padre = new Persona4("Juan", "Perez", "123@gmail.com");
console.log(padre);

let madre = new Persona4("Maria", "Rodriguez", "1234@gmail.com");
console.log(madre);

//Prototype (Asigna la misma propiedad y valor a todos los objetos)
Persona4.prototype.tel = "1243";
console.log(padre.tel);
console.log(madre.tel);
padre.tel = "555";
console.log(padre.tel);

//metodo call

