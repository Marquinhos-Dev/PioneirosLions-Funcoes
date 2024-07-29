/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function greetUsers(nome) {
    nome.forEach(nome => {
    console.log(`Oi, ${nome}`)
});
}

const userNames = ['pedro', 'd', 'f'];
greetUsers(userNames);