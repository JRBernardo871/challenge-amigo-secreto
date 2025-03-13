/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
Aqui você deverá desenvolver a lógica para resolver o problema.*/

let amigos = [];

function adicionarAmigo() {

    const inputAmigo = document.getElementById("inputAmigo");
    let amigo = inputAmigo.value.trim();
    const mensagem = document.getElementById("mensagem");
     
    if (amigo == ""){
        let mensagemErro = "Faltou escrever o nome do seu amigo ou amiga para prosseguir!";
        mensagem.textContent = mensagemErro; 
        } else { 
            let mensagemSucesso = "Amigo adicionado com sucesso!";
            mensagem.textContent = mensagemSucesso; 
            amigos.push(amigo);

            atualizarLista();   
        }
        inputAmigo.value = "";
        inputAmigo.focus();
        mensagem.value = "";
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i<amigos.length; i++){
        let novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigos[i];

        listaAmigos.appendChild(novoAmigo);        
    }   
} 

function sortearAmigo(){
    if (amigos.length === 0){
        let sortMensErro = "Você ainda não adicionou amigos para o sorteio!";
        mensagem.textContent = sortMensErro; 
        return;
    }
    if (amigos.length !== 0, amigos.length < 3){
        sortMensErro = "Falta adicionar amigos para seu Amigo Secreto ser mais divertido!";
        mensagem.textContent = sortMensErro; 
        return;
    } else {
        let sorteado = amigos [Math.floor (Math.random () *amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.textContent = `Seu amigo secreto foi ${sorteado} !`;
        }
        let limparLista = document.getElementById("listaAmigos");
        limparLista.innerHTML = "";
        amigos = [];
        mensagem.textContent = "Sorteio realizado com sucesso!";
        inputAmigo.value = "";  
    }

function limparLista() {
    if (amigos.length !== 0) {
        amigos.length = 0
        atualizarLista()
        const mensagem = document.getElementById("mensagem")
        mensagem.textContent = "Lista de amigos limpa com sucesso!"
    } else {
        const mensagem = document.getElementById("mensagem")
        mensagem.textContent = "Você ainda não tem amigos na sua lista."
    }
    
}   
        