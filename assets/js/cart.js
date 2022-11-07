// ABRINDO E FECHANDO BARRA LATERAL
const closeBtt = document.querySelector('.close-icon');
const openBtt = document.querySelector('.open-icon');

closeBtt.addEventListener('click', function () {
    const conteinerCart = document.getElementById('conteiner-cart-id');
    if (conteinerCart.classList.contains('hide')) {
        conteinerCart.classList.remove('hide');
    } else {
        conteinerCart.classList.add('hide');
    }
});

openBtt.addEventListener('click', function () {
    const conteinerCart = document.getElementById('conteiner-cart-id');
    if (conteinerCart.classList.contains('hide')) {
        conteinerCart.classList.remove('hide');
    } else {
        conteinerCart.classList.add('hide');
    }
});

var valorTotal = 0;
var itensCart = 0;
defVars();
criarProducts();
console.table(produtos);

function addCart(idprod) {
    produtos[idprod].qntItens++;
    apagarProducts();
    criarProducts();
};

function addCart2(idprod) {
    produtos[idprod].qntItens++;
    apagarProducts();
    criarProducts();
    openBttt();
}

function removeCart(idprod) {
    produtos[idprod].qntItens--;
    apagarProducts();
    criarProducts();
};

function deleteCart(idprod) {
    produtos[idprod].qntItens = 0;
    apagarProducts();
    criarProducts();
    itensCart = 0;
}

function openBttt() {
    const conteinerCart = document.getElementById('conteiner-cart-id');
    if (conteinerCart.classList.contains('hide')) {
        conteinerCart.classList.remove('hide');
    } else {
        conteinerCart.classList.add('hide');
    }
}
function closeBttt() {
    const conteinerCart = document.getElementById('conteiner-cart-id');
    if (conteinerCart.classList.contains('hide')) {
        conteinerCart.classList.remove('hide');
    } else {
        conteinerCart.classList.add('hide');
    }
}


function defVars() {
    for (var i = 0; i < produtos.length; i++) {
        produtos[i].verifica = Boolean(false);
        produtos[i].qntItens = 0;
    };
}
function criarProducts() {
    itensCart = 0;
    valorTotal = 0;

    // laço para obter o valor total

    for (var i = 0; i < produtos.length; i++) {
        itensCart += produtos[i].qntItens

        valorTotal = (parseFloat(produtos[i].preco) * produtos[i].qntItens) + valorTotal;
    };

    // laço para criar os produtos no carrinho

    for (var i = 0; i < produtos.length; i++) {
        // criando div _produto

        let maindiv = document.getElementById('items-cartid');
        let cdiv = document.createElement('div');

        cdiv.id = 'cartprod' + i;
        cdiv.className = '_produto';

        maindiv.appendChild(cdiv);

        // criando div img dentro do _produto

        let divprod = document.getElementById('cartprod' + i);
        let cdiv2 = document.createElement('div');

        cdiv2.id = 'img' + i;
        cdiv2.className = 'img-produto';

        divprod.appendChild(cdiv2);

        // adicionando img na div img

        let divimg = document.getElementById('img' + i);
        let cimg2 = document.createElement('img');

        cimg2.src = produtos[i].imagem;

        divimg.appendChild(cimg2);

        // criando div info-produto

        let cdiv3 = document.createElement('div');

        cdiv3.id = 'info' + i;
        cdiv3.className = 'info-produto';

        divprod.appendChild(cdiv3);

        // criando paragrafos

        let divp = document.getElementById('info' + i);
        let cp3 = document.createElement('p');
        let cp4 = document.createElement('p');
        let cp5 = document.createElement('p');

        cp3.textContent = produtos[i].nome;
        cp4.textContent = 'R$' + produtos[i].preco;
        cp5.textContent = 'Quantidade: ' + produtos[i].qntItens;

        divp.appendChild(cp3);
        divp.appendChild(cp4);
        divp.appendChild(cp5);

        // criando div menu-cart
        let cdiv4 = document.createElement('div');

        cdiv4.id = 'menu' + i;
        cdiv4.className = 'menu-cart'

        divprod.appendChild(cdiv4);

        // criando button trash-icon

        let divmenu = document.getElementById('menu' + i);
        let cbutton = document.createElement('button');

        cbutton.id = 'btt-trash' + i;
        cbutton.className = 'trash-icon'
        cbutton.setAttribute('onclick', 'deleteCart(' + i + ')');

        divmenu.appendChild(cbutton);

        //adicionando img para icone trash

        let btt1 = document.getElementById('btt-trash' + i);
        let cimg3 = document.createElement('img')

        cimg3.src = './assets/img/icones/close-icon.png';

        btt1.appendChild(cimg3);

        // criando div add-remove

        let cdiv5 = document.createElement('div');

        cdiv5.id = 'add-remove' + i;
        cdiv5.className = 'add-remove';

        divmenu.appendChild(cdiv5);

        // criando button add-icon 

        let divaddremove = document.getElementById('add-remove' + i);
        let cbutton2 = document.createElement('button');

        cbutton2.id = 'btt-add' + i;
        cbutton2.className = 'add-icon';
        cbutton2.setAttribute('onclick', 'addCart(' + i + ')');

        divaddremove.appendChild(cbutton2);

        // adicionando img para add icon

        let btt2 = document.getElementById('btt-add' + i);
        let cimg4 = document.createElement('img');

        cimg4.src = './assets/img/icones/plus-icon.png';

        btt2.appendChild(cimg4);

        // criando button remove-icon 

        let cbutton3 = document.createElement('button');

        cbutton3.id = 'btt-remove' + i;
        cbutton3.className = 'remove-icon';
        cbutton3.setAttribute('onclick', 'removeCart(' + i + ')');

        divaddremove.appendChild(cbutton3);

        // adicionando img para add icon

        let btt3 = document.getElementById('btt-remove' + i);
        let cimg5 = document.createElement('img');

        cimg5.src = './assets/img/icones/remove-icon.png';

        btt3.appendChild(cimg5);

        // adicionar tag hide

        if (produtos[i].qntItens <= 0) {
            divprod.classList.add('hide');
        }


        if (itensCart <= 0) {
            let divsemitens = document.getElementById('sem-itens');
            let bttfinalizar = document.getElementById('bttfina');
            let psub = document.getElementById('sub');
            let contin = document.getElementById('contin');

            divsemitens.classList.remove('hide');
            bttfinalizar.classList.add('hide');
            psub.classList.add('hide');
            contin.classList.replace('orange', 'roxo');

        };

        if (itensCart > 0) {
            let divsemitens = document.getElementById('sem-itens');
            let bttfinalizar = document.getElementById('bttfina');
            let psub = document.getElementById('sub');
            let contin = document.getElementById('contin');
            let spansub = document.getElementById('subt');
            var itensheader = document.getElementById('itens-header');

            divsemitens.classList.add('hide');
            contin.classList.replace('roxo', 'orange');
            bttfinalizar.classList.remove('hide');
            psub.classList.remove('hide');
            spansub.textContent = 'R$' + parseFloat(valorTotal.toFixed(3)) + ',90';
            itensheader.textContent = ('Seu carrinho (' + itensCart + ' itens)');
        };
    };
};


function apagarProducts() {
    for (var i = 0; i < produtos.length; i++) {

        let maindivv = document.getElementById('cartprod' + i);
        maindivv.remove();
    }
}