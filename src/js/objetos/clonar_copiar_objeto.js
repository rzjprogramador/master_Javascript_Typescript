const objetoRequest = {
  nome: 'Reinaldo',
  idade: 44,
}

/* ---------------------- // ---------------------- */
/* COPIAR OBJETO */
/*
 MODO MODERNO 2022 COM SPREED
 OPERACAO:
 1º PARAM :: ...OBJETO A SER COPIADO
 2º PARAM NOVAS PROPREIDADES
 ESTA OPERACAO GERA UM SERSULTADO PARA REAPROVEITAR.
 */
const novoObjetoModerno = { ...objetoRequest, novaChave1: 'novo valor', novaChave2: 'novo valor 2' }
console.log(novoObjetoModerno)

//

/* ---------------------- // ---------------------- */
/*
 MODO_ANTIGO_LEGADO
 COM METODO JS OBJECT.ASSIGN()
 sintaxe: Object.assign({..1º pra onde vai-novas props}, 2º Quem vai ser copiado)

 OPERACAO:
 - QUE NO 1º PARAM ESPERA PARA ONDE VAI A COPIA :: AQUI POSSO ADICIONAR NOVAS PROPRIEDADES AO NOVO OBJETO OU DEIXAR UM OBJ VAZIO
 - NO 2º .. DE ONDE ELE VAI COPIAR
 - ESTE METODO VAI GERAR UM RESULTADO DA OPERACAO
*/
const novoObjeto = Object.assign(
  {
    novaPRopriedade: 'Novo valor',
  },
  objetoRequest,
)

// console.log(novoObjeto)
