var entrada3 = require("readline-sync");
var senha = entrada3.question("digite a senha: ");
if (senha == 1234) {
    console.log("acesso permitido");
}
else {
    console.log("accesso negado");
}
