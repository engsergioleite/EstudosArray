const nomes = [ 'sergio', 'Ana paula', 'LAna', 'laIS'];

// const nomesAlterados = nomes.map((nome) => {
   // return nome.toUpperCase()
// })

// forma sintetica de usar arrowfunction

const nomesAlterados = nomes.map((nome) => nome.toUpperCase())

console.log(nomesAlterados)