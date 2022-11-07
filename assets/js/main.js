function naofunc() {
    alert('Conta ainda não vinculada')
}
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    proxImagem();
}, 5000)

function proxImagem() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

var produtos = [{
    nome: 'Balenciaga Speed Treiner',
    preco: '29.999,90',
    imagem: './assets/img/tenis-imgs/sapato_balenciaga-removebg-preview.png'
}, {
    nome: 'Versace Chain Reaction',
    preco: '59.999,90',
    imagem: './assets/img/tenis-imgs/sapato_versace-removebg-preview.png'
}, {
    nome: 'Balenciaga Triple S',
    preco: '16.999,90',
    imagem: './assets/img/tenis-imgs/tenis_balenciaga-removebg-preview.png'
}, {
    nome: 'Nike Air Max G3',
    preco: '3.999,90',
    imagem: './assets/img/tenis-imgs/Nike_air_MAx_Axis-removebg-preview.png'
}, {
    nome: 'Adidas Alpha Bouce',
    preco: '4.699,90',
    imagem: './assets/img/tenis-imgs/Tenis_Adidas_alpha_bouce_2.0-removebg-preview.png'
}, {
    nome: 'Adidas Ultra Bost',
    preco: '2.999,90',
    imagem: './assets/img/tenis-imgs/Tenis_Adidas_ultra_bost-removebg-preview.png'
}, {
    nome: 'Nike Fly II',
    preco: '4.299,00',
    imagem: './assets/img/tenis-imgs/TENIS_FLY_BY_II-removebg-preview.png'
}, {
    nome: 'Puma Court Ride',
    preco: '18.999,90',
    imagem: './assets/img/tenis-imgs/Puma_Court_ride-removebg-preview.png'
}, {
    nome: 'Nike Core Motion',
    preco: '2.999,90',
    imagem: './assets/img/tenis-imgs/Sapato_Nike_Core_motion-removebg-preview.png'
}, {
    nome: 'Nike Zoom',
    preco: '24.999,90',
    imagem: './assets/img/tenis-imgs/Nike_zoom-removebg-preview.png'
}, {
    nome: 'Puma Bmw',
    preco: '4.999,90',
    imagem: './assets/img/tenis-imgs/Puma_Bmw-removebg-preview.png'
}, {
    nome: 'Puma RS Fast',
    preco: '1.999,90',
    imagem: './assets/img/tenis-imgs/Puma_R-S_Fast-removebg-preview.png'
}, {
    nome: 'Puma style',
    preco: '1.399,90',
    imagem: './assets/img/tenis-imgs/Puma_Speed-removebg-preview.png'
}, {
    nome: 'Lacoste Carbany',
    preco: '4.999,90',
    imagem: './assets/img/tenis-imgs/Lacoste_Carnaby-removebg-preview.png'
}, {
    nome: 'Lacoste Sporte',
    preco: '22.999,90',
    imagem: './assets/img/tenis-imgs/Lacoste_sporte-removebg-preview.png'
}, {
    nome: 'Prada C-Inverno',
    preco: '12.999,90',
    imagem: './assets/img/tenis-imgs/Prada_C-Inverno-removebg-preview.png'
}, {
    nome: 'Yeezy 350',
    preco: '4.999,90',
    imagem: './assets/img/tenis-imgs/Yeezy_350-removebg-preview.png'
}, {
    nome: 'Yeezy Boost 700',
    preco: '8.999,90',
    imagem: './assets/img/tenis-imgs/Yeezy_Boost_700-removebg-preview.png'
}, {
    nome: 'Tommy Hilfiger',
    preco: '18.999,90',
    imagem: './assets/img/tenis-imgs/Tommy_Hilfiger_Classc-removebg-preview.png'
}, {
    nome: 'Vans Old Skool',
    preco: '12.999,90',
    imagem: './assets/img/tenis-imgs/Vans_Old_Skool-removebg-preview.png'
}];


document.addEventListener('DOMContentLoaded', function () {
    //laço para instanciar todos elementos do array produtos
    for (var i = 0; i < produtos.length; i++) {

        // criando section - produto
        let mainsection = document.getElementById('produtos');
        let csection = document.createElement('section');
        csection.className = 'produto';
        csection.id = 'prod' + i;

        mainsection.appendChild(csection);
        // adicionando img na section criada
        let sectionprod = document.getElementById('prod' + i);
        let cimg = document.createElement('img');
        cimg.src = produtos[i].imagem;

        sectionprod.appendChild(cimg);
        // criando div para nome e preço
        let cdiv1 = document.createElement('div');
        cdiv1.className = 'nome-preco';
        cdiv1.id = 'nomepreco' + i;

        sectionprod.appendChild(cdiv1);
        //adicionando paragrafos dentro da div criada
        let divcp = document.getElementById('nomepreco' + i);
        let cp1 = document.createElement('p');
        let cp2 = document.createElement('p');
        cp1.textContent = produtos[i].nome;
        cp2.textContent = 'R$' + produtos[i].preco;

        divcp.appendChild(cp1);
        divcp.appendChild(cp2);
        //criando div para o <a> button
        let cdiv2 = document.createElement('div');
        cdiv2.className = 'bttComprar';
        cdiv2.id = 'bttcomprar' + i;

        sectionprod.appendChild(cdiv2);
        //adicionando button ancora
        let divbtt = document.getElementById('bttcomprar' + i);
        let ca = document.createElement('button');

        ca.innerHTML = 'ADICIONAR AO CARRINHO';
        ca.setAttribute('onclick', 'addCart2(' + i + ')');


        divbtt.appendChild(ca);
    }
}, false);


