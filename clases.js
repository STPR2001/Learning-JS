class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this.apellido;
    }

    //Sobreescribir meotod toString de la clase padre Object (padre de todas las clases en JS)
    toString(){
        return this.nombreCompleto();
    }

    //Metodo static (no se comparte con los hijos)
    static saludar(){
        console.log("saludos desde metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }

}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = "Juan Carlos"; //set nombre
console.log(persona1.nombre); // get nombre


let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);

//Herencia 

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //llamar al cosntructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return this._nombre + " " + this._apellido + " " + this.departamento;
    }
}

console.log(persona1);

let empleado1 = new Empleado("Maria", "Gimenez", "Sistemas");
console.log(empleado1);

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

// persona1.saludar(); //No e posible llama un metodo static desde un objeto

Persona.saludar();

Persona.saludar2(persona1);