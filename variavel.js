/**
 * Utilizando as features Let, Const e Var
 */


 /**
  * Dentro do bloco de codigo tenho acesso
  * nos temos acesso a variaveis do escopo global
  */
 var serie = 'Friends';
 //bloco de codigos
 if(true){
     serie = 'Game Of Thrones';
 }

 console.log(serie);

/**
 * Saindo do escopo do bloco de codigo e indo para o escopo 
 * global do script
 * Isso acontece no ES5
 * As variaveis sofriam elevacao do escopo
 * para resolver isso utilizamos o let
 */
var serie2 = 'House';
if (true) {
    var serie3 = 'Sabrina';
}
console.log(serie3);

/**
 * let - quando utilizada cria uma variavel do escopo do bloco 
 * neste caso ao executar o comando 
 * ira imprimir Um maluco no pedaco e também Bones, pois cada um é uma variavel diferente
 * se termos declarar uma variavel let como global e dentro do bloco declararmos um var
 * mostrará um erro pois vamos tentar fazer um hosting (elevacao de codigo) mas dará conflito, pois a variavel ja existe
 */
var serie5 = 'Um maluco no pedaco';

if (true) {
    let serie5 = 'Bones';
    console.log(serie5);
}
console.log(serie5);

/**
 * Const - variaveis constantes
 * Ela nao podera ser modificada, 
 * ou seja se tentarmos fazer uma nova atribuicao para a variavel dara um erro
 * exemplo: serie6 = 'The Walking Dead';
 * isso apresentara um erro
 * O Const também é de contexto do bloco
 */

const serie6 = 'Superman';
