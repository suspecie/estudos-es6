/**
 * Arrow Functions são funções abreviadas, ou seja temos
 * que deixar o mais simples possível
 * @param {*} numero 
 */

//No ES5
var dobraDoValor = function (numero) {
    return numero * 2;
}

console.log(dobraDoValor(7));

//No ES6
/**
 * A palavra functions é substituída por =>
 * Ao lado esquerdo será colocado os parametros, se nao tiver parametro devemos colocar () => , se tiver mais de um devemos colocá-los dentro de (), se não tiver nenhum devemos colocar o simbolo ().
 * O return podemos apagar as chaves e a palavra return, se for mais complexa temos que colocar as chaves e o return. 
 * @param {*} numero 
 */
var triplicaDoValor = (numero) => numero * 3;

console.log(triplicaDoValor(7));

var triplicaDoValorExemplo2 = (numero) =>{
    return numero * 3;
}

console.log(triplicaDoValorExemplo2(7));