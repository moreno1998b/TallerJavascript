function calcularImc(){
    let vrkilos = document.getElementById("vrkilos").value;
    let estatura = document.getElementById("estatura").value;
    let imc=vrkilos/Math.pow(estatura,2);
    let vrRedondeado= imc.toFixed(2);
    var resultado = "Tu índice de masa corporal es "+imc+" donde <strong>"+vrRedondeado+"</strong> es el índice de masa corporal calculado redondeado con dos decimales. (kg/m2)" ;
    document.getElementById("salida2").innerHTML = resultado;
}