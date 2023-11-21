const notas = [10, 8.5, 4, 10];

notas.pop([0]);


const media = notas[0] + notas [1] + notas [2] / notas.length;

console.log([notas])

console.log(`A média é: ${media.toFixed(2)}.`); // the command toFixed() sets the number of decimals places