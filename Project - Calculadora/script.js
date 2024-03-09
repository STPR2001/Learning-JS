console.log("archivo incluido correctamente")

function sumar(){
    const $forma = document.getElementById("forma")
    let operandoA = $forma["operandoA"].value
    let operandoB = $forma["operandoB"].value
    let resul = parseInt(operandoA) + parseInt(operandoB)
    let $resultado = document.getElementById("resultado")
    if(isNaN(resul))
        $resultado.innerHTML = "La operacion no incluye numeros"
    else
        $resultado.innerHTML = "Resultado: " + resul
    console.log("Resultado: " + resul)
}

function multiplicar(){
    const $forma = document.getElementById("forma")
    let operandoA = $forma["operandoA"].value
    let operandoB = $forma["operandoB"].value
    let resul = parseInt(operandoA) * parseInt(operandoB)
    let $resultado = document.getElementById("resultado")
    if(isNaN(resul))
        $resultado.innerHTML = "La operacion no incluye numeros"
    else
        $resultado.innerHTML = "Resultado: " + resul
    console.log("Resultado: " + resul)
}

function dividir(){
    const $forma = document.getElementById("forma")
    let operandoA = $forma["operandoA"].value
    let operandoB = $forma["operandoB"].value
    let resul = parseInt(operandoA) / parseInt(operandoB)
    let $resultado = document.getElementById("resultado")
    if(isNaN(resul))
        $resultado.innerHTML = "La operacion no incluye numeros"
    else
        $resultado.innerHTML = "Resultado: " + resul
    console.log("Resultado: " + resul)
}