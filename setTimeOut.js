//Llamadas asicnronas con ueso de setTimeout

function miFuncionCallBack(){
    console.log("salido asincrono despues de 3 seg ")
}

setTimeout(miFuncionCallBack, 3000) //Despues de 3 segundos se ejecuta

setTimeout(funcion = () =>{console.log("funcion flecha con setTimeout")}, 2000)