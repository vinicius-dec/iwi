let op= "4";

console.log("-------------------------");
console.log("Digite 1:Primavera");
console.log("Digite 2:Verão");
console.log("Digite 3:Outono");
console.log("Digite 4:Inverno");
console.log("-------------------------");
console.log("");

switch(op){
    case "1":
        console.log(`Voce escolheu a opção ${op}:Primavera`);
        break;
    case "2":
        console.log(`Voce escolheu a opção ${op}:Verao`);
        break;
    case "3":
        console.log(`Voce escolheu a opção ${op}:Outono`);
        break;
    case "4":
        console.log(`Voce escolheu a opção ${op}:inverno`);
        break;
    default:
        console.log(`Opção Invalida!!!!`);
        break;

}

console.log("Fim de Programa!!!");
console.log("-------------------------");