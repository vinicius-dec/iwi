const transporte = "uber";

switch (transporte) {
    case "uber":
        console.log(`O transporte escolhido foi ${transporte}.`);
        break;

    case "99":
        console.log(`O transporte escolhido foi ${transporte}.`);
        break;
    case "onibus":
        console.log(`O transporte escolhido foi ${transporte}.`);
    default:
        console.log(`Opção invalida ${transporte}`);
        break;
}