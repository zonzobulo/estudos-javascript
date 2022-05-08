const alunos = [
    { nome: 'Joao', notas: [5, 7.5, 8, 8, 4.5, 9] },
    { nome: 'Breno', notas: [10, 8.5, 10, 7.5, 9, 6.5] },
    { nome: 'Pedro', notas: [5.5, 8.3, 9.5, 8, 9, 6.9] },
    { nome: 'Fulano', notas: [5.9, 8.5, 4, 8, 9.5, 6] },
    { nome: 'Angelino', notas: [0, 4.8, 9.2, 8.5, 4.9, 6.1] },
    { nome: 'Jaja', notas: [10, 4.3, 6.8, 8.25, 9.4, 6] },
    { nome: 'Frederico', notas: [3.5, 8, 10, 8.5, 9, 3.8] },
    { nome: 'Jonatas', notas: [6, 8.5, 8, 6.5, 7, 10] },
    { nome: 'Henrique', notas: [4, 8.2, 5.5, 8.5, 5.4, 6] }
]

function gerarMedia(objAluno){
  const {nome, notas} = objAluno
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
}
return {
          nome, 
          notas,
          mensagem: `${nome} sua média foi ` + soma / notas.length,
        };
};

const mediaAlunos = alunos.map(gerarMedia);
console.log(mediaAlunos); //queria printar somente a mensagem com a média mas não consegui pensar num modo de tirar somente a informação que eu preciso do .map
