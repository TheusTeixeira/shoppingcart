 // Definição dos produtos disponíveis na loja
const itens = [
    {
      id: 0,
      nome: 'Camiseta',
      preco: 29.99,
      img: 'https://via.placeholder.com/250x250?text=Camiseta',
      quantidade: 0
    },
    {
      id: 1,
      nome: 'Calça',
      preco: 59.99,
      img: 'https://via.placeholder.com/250x250?text=Cal%C3%A7a',
      quantidade: 0
    },
    {
      id: 2,
      nome: 'Jaqueta',
      preco: 99.99,
      img: 'https://via.placeholder.com/250x250?text=Jaqueta',
      quantidade: 0
    }
  ];
  
  // Seleção dos elementos HTML que serão manipulados
  const containerProdutos = document.getElementById('produtos');
  const containerCarrinho = document.getElementById('carrinho');
  const totalCarrinho = document.getElementById('total-carrinho');
  const botaoFinalizarCompra = document.getElementById('botao-finalizar-compra');
  
  // Cria um elemento HTML que representa um produto
  function criarElementoProduto(produto) {
    const elemento = document.createElement('div');
    elemento.classList.add('produto');
    elemento.innerHTML = `
      <img src="${produto.img}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <a href="#" data-id="${produto.id}" class="botao-adicionar">Adicionar ao carrinho</a>
    `;
    return elemento;
  }
  
  // Atualiza o carrinho de compras com os itens adicionados
  function atualizarCarrinho() {
    containerCarrinho.innerHTML = '';
    let total = 0;
    itens.forEach((produto) => {
      if (produto.quantidade > 0) {
        const elemento = document.createElement('p');
        elemento.innerHTML = `${produto.nome} | Quantidade: ${produto.quantidade} | Total: R$ ${(produto.quantidade * produto.preco).toFixed(2)}`;
        containerCarrinho.appendChild(elemento);
        total += produto.quantidade * produto.preco;
      }
    });
    totalCarrinho.innerHTML = `Total do carrinho: R$ ${total.toFixed(2)}`;
  }
  
  // Adiciona um listener para o evento click em cada botão "Adicionar ao carrinho"
  function adicionarListenersBotoesAdicionar() {
    const botoesAdicionar = document.querySelectorAll('.botao-adicionar');
    botoesAdicionar.forEach((botao) => {
      botao.addEventListener('click', (evento) => {
        evento.preventDefault();
        const id = parseInt(botao.dataset.id);
        itens[id].quantidade++;
        atualizarCarrinho();
      });
    });
  }
  
  // Adiciona um listener para o evento click no botão "Finalizar compra"
  function adicionarListenerBotaoFinalizarCompra() {
    botaoFinalizarCompra.addEventListener('click', () => {
      alert('Compra finalizada');
    });
  }
  
  // Inicializa a lista de produtos na página
  function inicializarLoja() {
    itens.forEach((produto) => {
      const elemento = criarElementoProduto(produto);
      containerProdutos.appendChild(elemento);
    });
    adicionarListenersBotoesAdicionar();
    adicionarListenerBotaoFinalizarCompra();
  }

    
    // função para remover itens do carrinho
function removerItem() {
var containerCarrinho = document.getElementById("carrinho");
containerCarrinho.innerHTML = "";
itens.map((val) => {
if (val.quantidade > 0) {
    containerCarrinho.innerHTML += "<p>" + val.nome + " | quantidade " + val.quantidade + " | <button class='remover' id='" + val.id + "'>remover</button></p><hr>";

}
});
adicionarListenersBotoesRemover();
}

// função para remover um item específico do carrinho
function remover(id) {
if (itens[id].quantidade > 0) {
itens[id].quantidade--;
atualizarCarrinho();
}
removerItem();
}

// adiciona event listeners aos botões de remoção de itens do carrinho
function adicionarListenersBotoesRemover() {
var btnsRemover = document.getElementsByClassName("remover");
for (var i = 0; i < btnsRemover.length; i++) {
btnsRemover[i].addEventListener("click", function () {
let id = this.getAttribute("id");
remover(id);
});
}
}


// Inicializa a lista de produtos na página
function inicializarLoja() {
itens.forEach((produto) => {
const elemento = criarElementoProduto(produto);
containerProdutos.appendChild(elemento);
});
adicionarListenersBotoesAdicionar();
adicionarListenerBotaoFinalizarCompra();
removerItem();
}

// Inicializa a loja
inicializarLoja();