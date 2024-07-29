/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function findMax (arrayDeNumeros) {
    let maiorNumero = [0]
    arrayDeNumeros.forEach(numero => {
        if (numero > maiorNumero)
            maiorNumero = numero
    })
    return maiorNumero
}

// testeTrabalhoPioneirosDaLions

console.log(findMax([2, 3, 5, 6, 7, 8, 6, 5 ,9 , 4]))