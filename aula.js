var entrada = require("readline-sync");
var nome = entrada.question("digite seu nome: ");
if (nome.toLowerCase() != "pelissari") {
    console.log("rala peito " + nome);
}
else {
    console.log("bem vindo " + nome.toLowerCase());
}
