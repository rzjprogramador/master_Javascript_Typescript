// EVAL == AUTO EXECUTADOR DE METODOS JAVASCRIPT

eval('console.log("Sendo executado via Eval")');

/* ---------------------- // ---------------------- */
/*  */
//
function soma(a, b) {
  console.log(a + b);
  // obs: EVAL() NAO EXECUTA FUNCOES VINDAS DE AROW FUCNTIONS ES6 POR SER MAIS ANTIGO
}

eval("soma(2, 3)");

/* ---------------------- // ---------------------- */
/*  */
//
