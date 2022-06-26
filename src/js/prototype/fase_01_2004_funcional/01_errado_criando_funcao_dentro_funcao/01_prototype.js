function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.login = function () {
    return `${this.nome} fez login !!!`;
  };
}

const reinaldo = new Pessoa("Reinaldo", 44);
const gustavo = new Pessoa("Gustavo", 12);

// console.log(reinaldo);
// console.log(gustavo);

// VERIFICAR SE APONTAM PRO MESMO OBJETO EM MEMORIA
// console.log(reinaldo.login === gustavo.login); // false -- Nao apontam entao cada um é um obj em memoria

// console.log([]);
// console.log({});

// ===========

/* ---------------------- // ---------------------- */
/* ACESSANDO O PROTOTIPO COM A PROPRIEDADE .prototype */

// EXEMPLO VERIFICANDO SE CADA OBJETO ESTA APONTANDO APRA O MESMO PROTOTIPO:

const arr1 = [];
const arr2 = [];

// console.log(arr1.prototype === arr2.prototype) // true --apontam para o emsmo prototipo
// ou
console.log(arr1.__proto__ === arr2.__proto__); // true --apontam para o emsmo prototipo

/* ---------------------- // ---------------------- */
