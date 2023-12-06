const lista = [1, 2, 3, 4, 5];

//for (let i = 0, j = 0; i < lista.length; i++, j++) {
//console.log(lista[i] + j); 
//}



// sintaxe usando map e função callback para fazer a some do indice ao elemento
let soma = 0 ;
const listaSomada = lista.map((numeros, indice) => numeros + indice)
console.log(listaSomada)
