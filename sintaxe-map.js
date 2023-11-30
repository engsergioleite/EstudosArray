const notas = [10, 9.5, 8, 7, 6]


//const notasNovas = notas.map((nota) => nota + 1);
//console.log(notasNovas)
 
const novasNotas = notas.map((nota) => {
    return  nota + 1 >= 10 ? 10 : nota + 1; // operador ternário limitando a nota em 10. Nota + 1 é menor ou igual a 10 ? escreva 10 senão escreva nota + 1
    
})

console.log(novasNotas)


// for (let i = 0 ; i < notas.length ; i++ ) {
// console.log(notas[i] + 1)
// }