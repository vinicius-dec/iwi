function exibirNome() {
    let nome = document.getElementById('nomeInput').value;
    if (nome==="Aizen" ) {
        document.getElementById('mensagem').innerHTML="Você acertou meu nome, parabens!!!"
    }else if(nome=="") {
        document.getElementById('mensagem').innerHTML="O campo está em branco, preencha ele"
    }else{
        document.getElementById('mensagem').innerHTML="Que pena, você errou..."
    }

   
}
function limpar() {
    document.getElementById('nomeInput').value="";
    document.getElementById('mensagem').innerHTML="";

}

let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});