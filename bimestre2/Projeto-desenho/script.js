function exibirNome() {
    let nome = document.getElementById('mensagem').innerHTML="Você acertou meu nome, parabens!!!";
    if (nome==="Aizen") {
        document.getElementById('mensagem').innerHTML="Você acertou meu nome, parabens!!!"
    }else{
        document.getElementById('mensagem').innerHTML="Que pena, você errou..."
    }

   
}
function limpar() {
    document.getElementById('nomeInput').value="";
    document.getElementById('mensagem').innerHTML="";

}