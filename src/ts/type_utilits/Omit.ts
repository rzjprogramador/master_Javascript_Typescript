import { TipoBase } from './_Base_Tipo_Base'

// ONIT PARA OMITIR
// SE FOR PROPRIEDADES PASSAR COMO STRINGS
// SÓ ACEITA O OPERADOR "| " PARA DEFINIR TODOS A SEREM APLICADOS

type RequestTipoBase = Omit<TipoBase, 'id' | 'idb'>
// NESTE NOVO TIPO VAI OMITIR DENTRO DO TIPO ALVO PESSOA AS PROPS DEFINIDAS EM STRING

const p1: RequestTipoBase = {
  nome: 'Reinaldo',
  idade: 44,
}

console.log(p1)
