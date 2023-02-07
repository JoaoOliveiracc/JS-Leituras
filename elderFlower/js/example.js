// Cria as variáveis para a mensagem de boas-vindas
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

var welcome = greeting + name + message;

// Cira as varáveis para armazenar detalhes sobre a placa
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subtotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;