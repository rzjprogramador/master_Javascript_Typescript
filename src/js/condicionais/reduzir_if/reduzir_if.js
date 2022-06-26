/* ---------------------- // ---------------------- */
/* MODO NOVO : ESCALAVEL */
//
const opcoesDisponiveis = {
    somar(a, b) { return  a + b }
    multiplicar(a, b) { return  a * b }
    subtrair(a, b) { return  a - b }
}

function clienteEscolheuModerno(opcao, a, b) {
    const operacao = opcaoDisponivel.opcao
    return operacao(a, b)

}
console.log(clienteEscolheuModerno(somar(100, 20)))

/* ---------------------- // ---------------------- */
/* MODO ANTIGO CHEIO DE IF */
//
const clienteDeseja = 'subtrair' // AVALIDA

function clienteEscolheu(a, b) {
  if (clienteDeseja === 'somar') {
    return a + b
  }
  if (clienteDeseja === 'multiplicar') {
    return a * b
  }
  if (clienteDeseja === 'subtrair') {
    return a - b
  }
}
// console.log(clienteEscolheu(100, 10))
