function calcularPago() {
    let vhorast = document.getElementById("vhorast").value;
    let cantidadh = document.getElementById("cantidadh").value;
    let valor_pago = vhorast * cantidadh;
    var resultado = "El Salario a recibir es : $" + valor_pago;
    document.getElementById("salida").innerHTML = resultado;
}

