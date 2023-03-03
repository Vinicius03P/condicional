const entrada1 = require("readline-sync");

let n: number = entrada1.question("digite um numero: ");
let n2:number = entrada1.question("digite outro numero: ");
if(n > n2){
    console.log(n)
}
else{
    console.log(n2)
}