const numUsuario = Number(prompt("Digite um número"))

const tabuada = (numero)=>{
    for(let i = 1; i <= 10; i++){
        console.log(`${numero}x${i} = ${numero*i}`);
    }

}

tabuada(numUsuario)