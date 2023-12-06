const alunos = ["Sérgio", "Ana Paula", "Lana", "Laís"];
const notas = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((aluno, indice) => {
return notas[indice] < 7}) //usando o filter com funcao callbeck pra filtrar os menores que sete para armazenar na variavel reprovados



console.log(reprovados)