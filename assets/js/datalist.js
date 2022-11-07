// ADICIONANDO DISPLAY NONE NO CSS
var datalist = document.querySelector('datalist');
datalist.style.display = 'none';

// array de produtos
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

    for (var i = 0; i < produtos.length; i++) {
        var clist = document.getElementById('dtlist');
        var coption = document.createElement('option');

        coption.textContent = 'ID = ' + i;
        coption.value = produtos[i].nome;
        clist.appendChild(coption);
    }
});
