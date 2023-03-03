const entrada3 = require("readline-sync");

let senha: number = entrada3.question("digite a senha: ");
if(senha == 1234){
    console.log("acesso permitido")
}
else{
    console.log("accesso negado")
}