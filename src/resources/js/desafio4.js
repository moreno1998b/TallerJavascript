
function calcularDatos() {
    // var cantidadpedir = Math.floor(Math.random() * 11);
    var cantidadpedir = Math.round(Math.random() * (10 - 2) + 2);
    alert('Le pedire ' + cantidadpedir + " Numeros para calcular su suma total");
    var numeros = [];
    var cont = 0;
    var x;

    for (i = 0; i < cantidadpedir; i++) {
        var x = prompt("Ingresa un numero:", "");
        numeros.push(Number(x));
    }
    for (i = 0; i < numeros.length; i++) {
        cont += numeros[i];
        console.log(numeros[i]);
    }

    document.getElementById("salida4").innerHTML = "Cantidad de datos :" + numeros.length + " - Resultado: " + cont;
}