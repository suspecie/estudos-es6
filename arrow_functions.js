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
var triplicaDoValor = (numero) => numero * 3;

console.log(triplicaDoValor(7));