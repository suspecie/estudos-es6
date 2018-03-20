# estudos-es6
Pequenas dicas de diferenças entre ES5 para o ES6:

* const
    - Declaração de variável
    - Declaração de variáveis constantes
    - O valor da variável não poderá ser mais modificada.
    - Ja na declaração deverá ser atribuido um valor à ela.
    - Escopo do bloco.
* let
    - Declaração de variável
    - Escopo do bloco.
    - Não é possível fazer hosting (elevação de variável)
* var
    - Declaração de variável
    - Fora do escopo de uma função é uma variável de escopo global, pode ser utilizada dentro de funções e dentro de blocos.
    - Escopo da função, pode ser usada dentro da função e dentro dos blocos.
    - Declaração bloco de código, variavel sai do escopo do bloco e assume o escopo ou da função ou escopo global, se esse bloco estiver fora de uma função. Conhecido como Hosting
* arrow functions
    - Forma abreviada de escrever funções.
    - A palavra functions é substituída por =>
    - Do lado esquerdo será colocado os parametros, se nao tiver parametro devemos colocar () => , se tiver mais de um devemos colocá-los dentro de (x, y) => , se tiver um só pode colocar sem parenteses.
* class
    - Permite a implementação de classes dentro dos nossos scripts.
    - Fica mais facil utilizar orientação a objetos.
    - As classes hoje permitem Herança, Super Chamadas, Métodos estáticos, Instâncias e Construtores.
* public e private
    - No ES6 não é possível utilizar os modificadores de visibilidade, essa inferência pode ser realizada utilizando o TypeScript.

## Executando o código
`` node nomedoarquivo ``
