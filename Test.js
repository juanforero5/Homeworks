// Funcion regular
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

var resultado = esParOImpar(5);
console.log(resultado);

// Funcion flecha
const esParOImpar2 = (numero) => (numero % 2 === 0) ? "Par" : "Impar";

const resultado2 = esParOImpar2(5);
console.log(resultado2);