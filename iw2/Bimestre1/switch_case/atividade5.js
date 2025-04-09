let perguntas = ["Sim","Sim","Sim","Sim","Sim","Sim","Sim","Sim","Sim","Não"]
let qntDeSim=0 ;

function Sim() {
  
    for (let index = 0; index < perguntas.length; index++) {
        if(perguntas[index]=="Sim"){
            qntDeSim++
        }
        
    }
    
}




console.log("1. Telefonou para a vítima?  ");
console.log(perguntas[0]);

console.log("1. Esteve no local da ocorrencia?  ");
console.log(perguntas[1]);

console.log("1. Mora no local da ocorrencia?  ");
console.log(perguntas[2]);

console.log("1. Já trabalhou com a vitima?  ");
console.log(perguntas[3]);

console.log("1. Tem grau parentesco com a vitima?  ");
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

Sim();
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
