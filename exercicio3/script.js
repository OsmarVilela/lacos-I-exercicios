const nomes = ["Osmar", "Henrique", "Alves", "Vilela", "João"]
const arrays = (dados)=>{
    for(let i = 0; i < dados.length; i++){
        console.log(`${i+1} - ${dados[i]} `);
    }
}

arrays(nomes)