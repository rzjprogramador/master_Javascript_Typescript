function PessoaManual(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// CRIANDO O PROTOTIPO MANUALMENTE PARA UMA FUNCAO QUE VAI SER INSERIDA NO PROTOTIPO
// TODA FUNCAO CRIADA COMO É UM OBJ TEM ACESSO AO .prototype <VC CHAMA O EMTODO QUE QUER CRIAR INVENATAR UM NOME E ATRIBUI A ELE A FUNCAO QUE DESEJA QUE ELE TENHA ex:>

// AQUI PARA O PROTOTIPO DA FUNCAO PessoaManual estou criando a funcao login que tera uma funcao.
PessoaManual.prototype.login = function () {
  return `${this.nome} fez login !!!`;
};

// ADICIONANDO MAIS FUNCOES PARA A FABRICA PessoaManual :: adicionando o metodo comentario()
// CRIANDO NO PROTOTYPE O METODO NOVO :: comenatrio()
PessoaManual.prototype.comentario = function () {
  return `${this.nome} comentou ....`;
};

// USO
const reinaldo = new PessoaManual("Reinaldo", 44);
const gustavo = new PessoaManual("Gustavo", 12);

// USO METODO NOVO
// reinaldo.comentario()

// VER
console.log(reinaldo);
console.log(gustavo);

// VER USO DE METODOS NOVOS
console.log(reinaldo.comentario());
console.log(gustavo.comentario());

// COMPROVAR QUE CADA OBJETO CRIADO AGORA ESTA REFERENCIANDO A MESMA FUNCAO
console.log(reinaldo.login === gustavo.login); // true diz que é verdade referenciam a mesma funcao
