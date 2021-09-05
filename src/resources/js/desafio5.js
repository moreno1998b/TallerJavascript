function validarPalindromo() {
    var str = document.getElementById("palabra").value;
    const newStr = str.replace(/[\W_]/g, "").toLowerCase()
    const strReversed = newStr.split("").reverse().join("")

    var resultado = "la palabra " + str + (newStr === strReversed ? "  es palindromo" : "  no es palindromo");
    document.getElementById("salida5").innerHTML = resultado;
}

