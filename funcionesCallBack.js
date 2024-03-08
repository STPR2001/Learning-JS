function miFuncion1(){
    console.log("funcion 1")
}

function miFuncion2(){
    console.log("funcion 2")
}

miFuncion1()
miFuncion2()

//FUNCION CALLBACK

function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1, op2, functionCallBack){
    let res = op1 + op2
    functionCallBack("Resultado: " + res)  

}
sumar(5, 3, imprimir)