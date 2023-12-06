const nomes = ["sergio", "ana paula", "lana", "lais", "sergio", "sergio", "sergio","sergio"];

const novoArraySet = new Set(nomes) // criará um set, baseado no array nome, fazendo o filtro de repetidas

const novoArray = [...novoArraySet] // criando um novo array baseado no Set. 

console.log(novoArray)