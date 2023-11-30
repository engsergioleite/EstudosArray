const notas = [10, 6.5, 8, 7.5]
/*
notas.forEach(function(){
    console.log("oi")
}) */

let somaDasNotas = 0

notas.forEach(function(nota, indice) { //declaração da função callback
    somaDasNotas += nota
    console.log(nota, indice) // imprime os dois parametros passados para a função callback, que retorna a nota e o indice do array.
    })

let media = somaDasNotas / notas.length

console.log (`A média das notas é: ${media}.`)
