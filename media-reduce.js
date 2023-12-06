const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]; 
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notaDaSala) {
    const somaDasNotas = notaDaSala.reduce((acc, nota) => acc + nota, 0); //0 é o parametro inicial do acc (acumulador) e nota é a de soma entre os valores das notas do array
    // 0 é o parametro inicial para o acumulador começar
    const media = somaDasNotas / notaDaSala.length 
    return media; // retornando a média a chamada da função no console.log
}

console.log(`A média da sala de SalaJS é: ${calculaMedia(salaJS)}`)
console.log(`A média da sala de SalaJS é: ${calculaMedia(salaJava)}`)
console.log(`A média da sala de SalaJS é: ${calculaMedia(salaPython)}`)




