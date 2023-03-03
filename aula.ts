const entrada = require("readline-sync");

let nome: string = entrada.question("digite seu nome: ");
if(nome.toLowerCase() != "pelissari"){
    console.log("rala peito " + nome)    
}
else{
    console.log("bem vindo " + nome.toLowerCase())
}