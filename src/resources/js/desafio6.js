function procesarMuestra() {
    var muestraConcat = document.getElementById("muestra").value;

    // console.log("-"+muestraConcat+"-");
    var numeros = muestraConcat.split(",");
    var cantidadN = numeros.length;
    var sumatoriaX = 0;
    for (let index = 0; index < numeros.length; index++) {
        sumatoriaX += Number(numeros[index]);


    }
    var mediaAritmetica = sumatoriaX / cantidadN;
    var sumDistMuestra = 0;
    for (let index = 0; index < numeros.length; index++) {
        const sumDistMuestraIndividual = Math.pow(Number(numeros[index]) - mediaAritmetica, 2);
        console.log(sumDistMuestraIndividual);
        sumDistMuestra += sumDistMuestraIndividual;
    }
    var desvEstandar=Math.sqrt(sumDistMuestra/numeros.length);
    desvEstandar=desvEstandar.toFixed(2);
    console.log(desvEstandar);


    document.getElementById("salida6").innerHTML = "La Media Aritmetica de la muestra es :"+mediaAritmetica;
    document.getElementById("salida6.1").innerHTML = "La Desviación Estándar de la muestra es :"+desvEstandar;

}