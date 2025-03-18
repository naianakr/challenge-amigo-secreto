// Criando o array para armazenar os nomes
let listaAmigos = [];
let lista = document.getElementById('listaAmigos');

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("Por favor, insira um nome.");
        return;
    } 
    
    if (listaAmigos.includes(amigo.value)) {
        alert("Esse nome já foi adicionado.");
        return;
    } else {
        listaAmigos.push(nome);
        limparCampo();
    }
    atualizarLista();
    console.log('Nome inserido: ', nome);
    return nome;
    
}

// Função para limpar o campo
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

// Função para atualizar a lista
function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista existente

    listaAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}.</li>`;
}

