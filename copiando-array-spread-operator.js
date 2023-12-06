const notas = [7, 7, 8, 9];

// const novoArrayNotas = notas // copiando desta forma o JS vai atribuir um array no outro e toda alteração valerá para os dois

// para copiar, usando um spread operator (operador de espalhamento) que espalhará os dados do array em um novo

const novoArrayNotas = [...notas, 10, 20] // podemos adicionar novos valores no array após o spread

// novoArrayNotas.push(10)

console.log(novoArrayNotas)
console.log(notas)