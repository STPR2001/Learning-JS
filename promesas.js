let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver("Resolvio correcto")
    else
        rechazar("se prdujo un error")
});


miPromesa.then(valor => console.log(valor), error => console.log(error))

//Mejor manera de escribir usando catch
miPromesa
.then(valor => console.log(valor))
.catch (error => console.log(error))



let promesa = new Promise((resolver) => {
    console.log("inicio promesa")
    setTimeout(()=> resolver("saludos con promesa y timeout"), 3000)
});

promesa.then(valor => console.log(valor))

//PALABRA ASYNC
//async indica que una fucnion regresa una promesa

async function miFuncionConPromesa(){
    return "saludos con promesa y async";
}

miFuncionConPromesa().then(valor => console.log(valor))

//PALABRA AWAIT Y ASYNC

async function funcionConPromesaYawait(){
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con await")
    })

    console.log(await miPromesa)
}

funcionConPromesaYawait();

//PROMEAS, AWAIT, ASYNC Y SETTIMEOUT

async function funcionConPromesaAwaitTiemout(){
    console.log("inicio funcion")
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver ("promesa con await y timeout"), 3000)
    })
    console.log(await miPromesa)
    console.log("fin funcion")
}

funcionConPromesaAwaitTiemout()