class LoginService {
  loginService() {
    return `Logado`;
  }
}

// PRINCIPAL CONSTRUTORA QUE VAI USAR O SERVICE
class Pessoa {
  constructor(nome, idade, objLogin) {
    this.nome = nome;
    this.idade = idade;
    this.objLogin = objLogin;
  }

  comentario() {
    return `${this.nome} comentou ...`;
  }

  login() {
    return `${this.nome} está ${this.objLogin}`;
  }
}
const login = new LoginService();

const reinaldo = new Pessoa("Reinaldo", 44, login.loginService());
const gustavo = new Pessoa("Gustavo", 12, login.loginService());

// VER
console.log(reinaldo);
console.log(reinaldo.comentario());
console.log(reinaldo.login());
console.log(gustavo.login());

/* ---------------------- // ---------------------- */
