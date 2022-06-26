// FUNCAO DE SERVICO QUE VAI SER USADA NA FUNCAO PRINCIPAL
function criaObjetoService(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  return { nome, idade };
}

// FUNCAO PRINCIPAL DE CRIACAO
function criaObjeto(nome, idade) {
  // USANDO A REFERENCIA DO SERVICO PARA CRIAR O OBJETO
  const criandoViaService = criaObjetoService(nome, idade);
  return criandoViaService;
}

// USANDO
const ob1 = criaObjeto("Reizao", 101);
const ob2 = criaObjeto("Gustavao", 112);
console.log(ob1);
console.log(ob2);

// INVESTIGANDO NO CONSTRUTOR DA FUNCAO PRINCIPAL SE O EMTODO ESTA LÁ
console.log(criaObjeto.prototype);
