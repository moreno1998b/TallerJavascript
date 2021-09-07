var x = 0;
var baseNumeros = Array();
function captura() {
    baseNumeros[x] = document.getElementById("numero").value;
    x++;
    document.getElementById("numero").value = "";
    console.log(baseNumeros);
}


function sumaArreglo() {
    var suma = 0;
    for (var index = 0; index < baseNumeros.length; index++) {
        suma += parseInt(baseNumeros[index]);
        console.log("sumando  de a " + baseNumeros[index] + "       :" + suma);
    }
    console.log("resultado " + suma);
    document.getElementById("salida4").innerHTML = "resultado " + suma;
}
function reiniciar(){
    x=0;
    baseNumeros = Array();
    document.getElementById("numero").value = 0;
}