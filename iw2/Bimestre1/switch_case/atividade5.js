// Variavel que guarda array de respostas sim 
let perguntas = ["Sim","Não","Não","Sim","Sim","Sim","Sim","Sim","Sim","Não"]
// Variavel para sim
let qntDeSim=0 ;
//Função para fazer o calculo de quantos sim
function Sim() {

    // Looping para contatos sim tem
    for (let index = 0; index < perguntas.length; index++) {
        // Condicional que relaciona o array e pega o lugar da lista e observa se e sim ou não, para adicionar mais 1 ao valor da variavel qntDeSim
        if(perguntas[index]=="Sim"){
            qntDeSim++
        }
        
    }
    
}



// Pega o valor do lugar  do array
console.log("1. Telefonou para a vítima?  ");
console.log(perguntas[0]);

console.log("1. Esteve no local da ocorrencia?  ");
console.log(perguntas[1]);

console.log("1. Mora no local da ocorrencia?  ");
console.log(perguntas[2]);

console.log("1. Já trabalhou com a vitima?  ");
console.log(perguntas[3]);

console.log("1. Tem grau de parentesco com a vitima?  ");
console.log(perguntas[4]);

console.log("1. Você conhace a vitima?  ");
console.log(perguntas[5]);

console.log("1. Telefonou para a vítima?  ");
console.log(perguntas[6]);

console.log("1. Telefonou para a vítima?  ");
console.log(perguntas[7]);

console.log("1. Telefonou para a vítima?  ");
console.log(perguntas[8]);

console.log("1. Telefonou para a vítima?  ");
console.log(perguntas[9]);

// Chama a função
Sim();
// Não funciona sem o true
switch (true) {
    
    case qntDeSim<=8 && qntDeSim>=6:
        console.log("Cumplice");
        break;
    case qntDeSim>=9 && qntDeSim<=10:
        console.log("Culpada");
        break;
    default:
        console.log("Suspeita");       
}
