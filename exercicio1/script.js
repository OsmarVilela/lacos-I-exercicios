const pedidoCoxinha = ()=>{

let coxinhas = prompt("Deseja mais uma coxinha?").toUpperCase()
let conta = 0
while(coxinhas === "S"){
    conta = conta + 2.5
    console.log(`Prévia do valor da conta R$${conta}`);
    coxinhas = prompt("Deseja mais uma coxinha?").toUpperCase()
}
console.log(`Valor Total da Conta = R$${conta}`);
}

pedidoCoxinha()