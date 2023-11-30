const nomes = ["Sérgio", "Ana Paula", "Lana", "Laís"];

/* nomes.forEach(function(nome){
    console.log(nome)
}) */ // forma normal de função callback

// usando arrow function

/* nomes.forEach ((nome) => {
    console.log(nome)
})
*/ 

// usando funcção padrão

function nomesAlunos (nome) {
    console.log(nome)
}

nomes.forEach (nomesAlunos)


