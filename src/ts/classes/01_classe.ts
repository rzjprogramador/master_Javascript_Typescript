class User {
  public fixa1: string = 'fixa valor 1'

  constructor(private readonly dinamica1: string) {
    this.dinamica1 = dinamica1.toUpperCase()
    /*
    NO BLOCO CONFIGURADOR :
    POSSO MANIPULAR AS PROPS DINAMICAS DO CONSTRUTOR
    NAO MANIPULA AS PROPS FIXAS
    */
  }
}

// MAIN USO
const u1 = new User('valor dinamica 1')
u1.fixa1 = 'mudada fixa 1'
// u1.dinamica1 = 'mudada dinamica 2' // NAO POSSO MUDAR PRIVADA
console.log(u1)

export default 1
