// PEGANDO ID PELA URL
var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});

// EXECUTANDO ALTERAÇÃO DE NOME, FOTO E PREÇO DO PRODUTO.
document.addEventListener('DOMContentLoaded', function () {
    var img = document.querySelector('#img');
    var p1 = document.querySelector('#p1');
    var p2 = document.querySelector('#p2');
    var idProd = data.id;
    p1.textContent = produtos[idProd].nome;
    p2.textContent = 'R$' + produtos[idProd].preco;
    img.src = produtos[idProd].imagem;
}, false);