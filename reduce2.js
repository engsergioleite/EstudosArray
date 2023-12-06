const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]; 
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


function calculaMedia(notaDaSala){
    const somaDasNotas = notaDaSala.reduce((acc, nota) => acc + nota ,0); //o argumento acc faz a soma das notas (acumula) e o nota é o valor de cada indice do array. Tb podemos incluir mais 2 argumentos que são o indice e o array total.
    const media = somaDasNotas / notaDaSala.length
    return media
}

console.log(calculaMedia(salaJS))
console.log(calculaMedia(salaJava))
console.log(calculaMedia(salaPython))


