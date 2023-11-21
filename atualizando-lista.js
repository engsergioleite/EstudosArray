const alunos = [
    "sergio",
    "paula",
    "lana",
    "lais",
    "fatima", 
    "gisele", 
    "frederico", 
    "cecilia", 
    "jessica", 
    "rodrigo"
    ];

    console.log(alunos) // imprime a lista atual
    // alunos.splice(6,2); // exclui 2 elementos, a contar do indice 6
    //console.log(alunos); // imprime a nova lista
    // alunos.push("lila", "jorge"); // adiciona dois elementos novos mas vamos usar um novo metodo para add
    alunos.splice(6,2, "lila", "jorge"); // exclui 2 elementos, a contar do indice 6 e ja adiciona 2 elementos
    console.log(alunos) // imprime nova lista


