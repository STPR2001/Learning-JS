//Declaracion de funcion
function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

//Llamando la funcion
miFuncion(4,6);
miFuncion(10,10);

function suma(a,b){
    return a + b;
}

console.log(suma(5,6));

//Declaracion funcion tipo expresion
let x = function (a,b){return a+b};

resultado = x(1,2);
console.log(resultado);

//Funcion Flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;
console.log(sumarFuncionTipoFlecha(5,6));

//Sumar todos los argumentos de una funcion
let = resultado2 = sumarTodo(5, 4, 3, 2, 9);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(resultado2);
