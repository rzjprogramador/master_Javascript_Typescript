// FUNCAO FABRICA

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // se é configuravel

    // GETTER
    get: function () {
      return estoque;
    },

    // SETTER
    set: function (valor) {
      console.log(valor);
    },
  });
}

const p1 = new Produto("Camisa", 100, 1000);
console.log(p1);
console.log(p1.estoque);
console.log((p1.estoque = "valor que quero"));
4;
