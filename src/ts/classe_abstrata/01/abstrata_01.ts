/*
QUERO UM OBJETOS:
{ nome: 'Reinaldo', idade: 44, casado: true},
{ nome: 'Leonardo', idade: 6, casado: false},
{ nome: 'Gustavo', idade: 12, casado: false},
*/

// CONTRATO ENTIDADE
abstract class Entity<T> {
  constructor(private readonly props: T) {}
}
// OBS: METODOS NAO CRIO NO OBJETO DA ENTIDADE --CRIO NOS REPOSITORIOS O CONTRATO E IMPLEMENTO NO USECASES

// USO CLASSES ===========
type UserProps = { nome: string; idade: number; casado: boolean }

class User extends Entity<UserProps> {
  constructor(props: UserProps) {
    super(props)
  }

  static create(props: UserProps) {
    const user = new User(props)
    return user
  }
}

// CRIANDO FILHOS >> OBJETOS DA CLASSE USER
const reinaldo = User.create({ nome: 'Reinaldo', idade: 44, casado: true })
const leornardo = User.create({ nome: 'Leonardo', idade: 6, casado: false })
const gustavo = User.create({ nome: 'Gustavo', idade: 12, casado: false })

console.log(reinaldo)
console.log(``)
console.log(leornardo)
console.log(``)
console.log(gustavo)
