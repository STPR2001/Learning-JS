
let hora = 8 ;
let mensaje;

if (hora >= 6 && hora <= 12){
    mensaje = "Buenos dias";
}
else if (hora >= 13 && hora <= 19){
    mensaje = "Buenas tardes";
}
else if(hora >= 20 && hora <=24){
    mensaje = "Buenas noches";
}
else if(hora >= 0 && hora <6){
    mensaje = "Estoy durmiendo";
}
else{
    mensaje = "Valor incorrecto"
}
console.log(mensaje)

