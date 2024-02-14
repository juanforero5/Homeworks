const myArray = [1, 2, 3];
const myArray2 = [4, 5, 6];

//Metodo push()
myArray.push(4)
console.log(myArray)

//Metodo at()
let index = 2;
console.log(`El indice ${index} devuelve el valor ${myArray.at(index)}`)

//Metodo concat()
const myArray3 = myArray.concat(myArray2)
console.log(myArray3)

//Metodo constructor() con un solo parametro
const frutas = new Array(2);
console.log(frutas.length); // 2
console.log(frutas[0]); // undefined

//Metodo constructor() con multiples parametros
const vehiculos = new Array("Carro", "Moto", "Avion");
console.log(vehiculos.length); // 3
console.log(vehiculos[0]) // "Carro"

//Metodo copyWithin()
const myArray4 = ['a', 'b', 'c', 'd', 'e'];
const myArray5 = ['f', 'g', 'h', 'i', 'j'];
console.log(myArray4.copyWithin(0, 3, 4)); // Copia en el index 0 el elemento del index 2
console.log(myArray4.copyWithin(1, 3));

//Metodo entries()
var array1 = ['a', 'b', 'c']
var iterator = array1.entries();
 for (let e of iterator) {
    console.log(e);
 }

 //Metodo every()********************************************
 const areEvery = myArray.every(x => x < 4)
 console.log(areEvery)

//Metodo fill()
console.log(...myArray.fill(0,2,4)) // Llena con el valor 0 desde la posicion 2 hasta la 4
console.log(...myArray.fill(5,1)) // Llena con el valor 5 desde la posicion 1
console.log(...myArray.fill(6)) // Llena el arreglo con el valor 6 en todas las posiciones

// Metodo filter()
function esGrande(elemento){
    return elemento >= 10;
}
const numeros =[12, 5, 8, 130, 44];
console.log(numeros.filter(esGrande));

//Metodo find()
const found = numeros.find((elemento) => elemento > 10);
console.log(found);

//Metodo findIndex()
const numeroLargo = (element) => element > 13; // Devuelve el indice del primer elemento dentro del arreglo que cumpla con la condición
console.log(numeros.findIndex(numeroLargo));

//Metodo findLast()
const encontrar = numeros.findLast((element) => element > 45); // Devuelve el valor del ultimo elemento del arreglo que cumpla con la condición
console.log(encontrar);

//Metodo findLastIndex()???????????????????????????????????


//Metodo flat()
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));

//Metodo flatMap()*****************************************
var arr4 = [1, 2, 3, 4];
console.log(arr4.flatMap((x) => [x * 2]));
console.log(arr4.flatMap((x) => [[x * 2]]));

//Metodo forEach()
arr4.forEach((element) => console.log(element)); // Ejecuta la función indicada una vez por cada elemento del arreglo

//Metodo includes()
console.log(arr4.includes(2)); // Determina si una matriz contiene un valor determinado, devuelve true o false
console.log(arr4.includes(5));

//Metodo indexOf()*****************************************
var array2 =[2, 9, 9];
console.log(`
${array2.indexOf(2)}
${array2.indexOf(7)}
${array2.indexOf(9,2)}
${array2.indexOf(2, -1)}
${array2.indexOf(2, -3)}
`)

//Metodo join()
const elementos = ['Fuego', 'Aire', 'Agua'];
console.log(elementos.join());
console.log(elementos.join(''));
console.log(elementos.join('-'));

//Metodo keys()*******************************************
const array3 = ['a', 'b', 'c'];
const iterator2 = array3.keys();

for (const key of iterator2) {
  console.log(key);
}

//Metodo lastIndexOf()
const animales = ['Perro', 'Gato', 'Pajaro', 'Vaca'];
console.log(animales.lastIndexOf('Gato'));
console.log(animales.lastIndexOf('Vaca'));

//Metodo map()
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x){
    return x * 2;
});

console.log(doubles);

//Metodo pop()
const plantas = ['Margarita', 'Rosa', 'Tulipanes', 'Lavanda'];
console.log(plantas.pop()); // Elimina el ultimo elemento de un arreglo y lo devuelve
console.log(plantas);

//Metodo reduce()???????????????????????????????????????
//Metodo reduceRight()??????????????????????????????????

//Metodo reverse()
const array4 = ['Uno', 'Dos', 'Tres', 'Cuatro'];
const reversed = array4.reverse(); // Invierte el orden de los elementos de un arreglo
console.log('Reversa:', reversed);

//Metodo shift()
var peces = ['Angel', 'Payaso', 'Espada', 'Cirujano'];
eliminado = peces.shift(); // Elimina el primer elemento de un arreglo y lo retorna

console.log('peces despues: ' + peces);
console.log('Elemento eliminado: ' + eliminado);

//Metodo slice()
var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1,3); // Devuelve una copia de una parte del array indicada
console.log(masculinos);

//Metodo sort()
const vegetales = ["Zanahoria", "Cebolla", "Pimenton", "Ajo"];
console.log(vegetales.sort()); // Ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado

const puntos = [6, 3, 8, 9, 5, 2, 4];
console.log(puntos.sort());

//Metodo splice()*****************************************
const meses = ['Ene', 'Mar', 'Abr', 'Jun'];
meses.splice(1, 0, 'Feb')
console.log(meses); // Elimina 0 elementos desde el indice 1 e inserta "Feb"

meses.splice(4, 1, 'May')
console.log(meses); // Reemplaza 1 elementos desde el indice 4 insertando "May"

//Metodo toLocaleString()*********************************
const array5 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array5.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

//Metodo toString()
const array6 = [1, 2, 'a', '1a'];
console.log(array6.toString()); // Devuelve una cadena de caracteres representando el arreglo y sus elementos

//Metodo unshift()
const array7 = [1, 2, 3];
array7.unshift(4, 5); // Agrega uno o mas elementos al inicio del arreglo y devuelve la nueva longitud del arreglo
console.log(array7);

//Metodo values()
var array8 = ["w", "y", "k", "o", "p"];
var iterator3 = array8.values(); // Devuelve un nuevo objeto arreglo que contiene los valores para cada indice del arreglo 

for (let letras of iterator3) {
    console.log(letras)
}