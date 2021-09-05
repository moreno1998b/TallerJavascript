function calcularTotalVenta() {
    let dulceHoy = document.getElementById("dulceHoy").value;
    let dulceOtrodia = document.getElementById("dulceOtrodia").value;
    var unidadBarra = 450;
    var descuento = 0.5;
    var tVendidasHoy = dulceHoy * unidadBarra;
    var tVendidasOtrodia = dulceOtrodia * unidadBarra;
    var descuentoAplicado = tVendidasOtrodia * descuento;
    let totalventa = tVendidasHoy + descuentoAplicado;

    document.getElementById("salida3").innerHTML = "Valor por cada barra $ : $450";
    document.getElementById("salida3.1").innerHTML = "Descuento Aplicado: $" + descuentoAplicado;
    var resultado = "Costo total de tu Venta $" + totalventa;
    document.getElementById("salida3.2").innerHTML = resultado;
}