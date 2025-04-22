function calcularFactorial() {
    let numero = prompt("Ingrese un número:");
    numero = Number(numero);

    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        console.log(`El factorial de ${numero} es ${factorial}`);
    } else {
        alert("No se ingresó un número válido. Por favor, inténtalo nuevamente.");
    }
}

calcularFactorial();
