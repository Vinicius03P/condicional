var entrada2 = require("readline-sync");
var ano = entrada2.question("data de nascencia: ");
var conta = 2023 - ano;
if (conta >= 18) {
    console.log("voce pode votar");
}
else {
    console.log("pobre, nao tem idade para votar");
}
