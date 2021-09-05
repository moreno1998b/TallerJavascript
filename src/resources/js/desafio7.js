class Fruta {
    constructor(nombre, precioKilo) {
        this.nombre = nombre;
        this.precioKilo = precioKilo;
    }
}

const mango = new Fruta('mango', 4000);
const piña = new Fruta('piña', 5000);
const papaya = new Fruta('papaya', 3000);
const uva = new Fruta('uva', 2500);
const manzana = new Fruta('manzana', 4000);
const banano = new Fruta('banano', 3800);

let frutas = [mango, piña, papaya, uva, manzana, banano];

function calcularPrecioFruta() {
    var fruta = document.getElementById("fruta").value;
    var kilos = document.getElementById("kilos").value;

    var frutaAux = null;
    for (const property in frutas) {
        console.log(frutas[property].nombre);
        if (fruta === frutas[property].nombre) {
            frutaAux = new Fruta();
            frutaAux = frutas[property];
            console.log('La fruta existe ' + fruta);
            break;
        }



    }

    if (frutaAux === null) {
        document.getElementById("salida7").innerHTML = "La fruta " + fruta + " no se encuentra en inventario.";
    } else {
        var calcularPrecio = frutaAux.precioKilo * kilos;
        document.getElementById("salida7").innerHTML = "El precio de la cantidad de fruta solicitada es : $" + calcularPrecio + "<br></br>" + "Precio por Kilo: $" + frutaAux.precioKilo;
    }
    console.log(frutaAux);

}