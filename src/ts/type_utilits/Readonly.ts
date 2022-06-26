import { TipoBase } from './_Base_Tipo_Base'

type SomenteLeitura = Readonly<TipoBase>
// NESTE NOVO TIPO VAI TRANSFORMAR O OBJETO EM SOMENTE LEITURA NAO PODENDO SER ALTERADO FORA

const somenteLeitura: SomenteLeitura = {
  nome: 'Reinaldo',
  idade: 44,
  id: '1',
  idb: '1',
}

console.log(somenteLeitura)

// SE TENTAR MODIFICAR ALGUMA PROP >> NOA VAI DEIXAR
// somenteLeitura.nome = 'Outro Nome'
console.log(somenteLeitura)
