let ListaPresenca= ["Sofia","Mariana","Beatriaz","Isabela"];

function verificarPresenca(nome) {
    if(ListaPresenca.includes(nome)){
        return nome + " Esta presente"
    }else{
        return nome + " não esta na lista" && ListaPresenca.push(nome)
    }
}

console.log(verificarPresenca("guilherme"));
console.log(verificarPresenca("Sofia"));
console.log(verificarPresenca("Mariana"));
