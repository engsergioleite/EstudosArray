const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

for (var i = 0 ; i < notas.length ; i++) {

    // somaDasNotas = notas[i] + somaDasNotas; 
        somaDasNotas += notas[i] // o sinal += atribui o valor do array a variavel soma, ficando com o codigo limpo

    }

    const media = somaDasNotas / notas.length;


console.log(`A média do aluno foi de ${media}`)
// var media = soma / notas.length

// console.log(`A média do aluno foi ${media}`)
