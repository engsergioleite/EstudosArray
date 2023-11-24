const notas = [10, 6.5, 8, 7.5];
somaDasNotas = 0 

for (let nota of notas){
    console.log(nota)
    somaDasNotas += nota
}


let media = somaDasNotas / notas.length;
console.log(`a média do aluno foi ${media}`)

// outra sintaxe parecida 
/*
for (let elemento in notas){

    console.log (notas[elemento])
} 
*/ 

