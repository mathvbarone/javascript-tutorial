var tanque = 40;
var caminhoComGasolina = 480;
var caminhoComAlcool = 300;
var consumoComGasolina = tanque / caminhoComGasolina;
var consumoComAlcool = tanque / caminhoComAlcool;
var precoDaGasolina = 2.90;
var precoDoAlcool = 2.40;
var precoPorLitroGasolina = precoDaGasolina / consumoComGasolina; 
var precoPorLitroAlcool = precoDoAlcool / consumoComAlcool; 


document.write( "O consumo do carro com gasolina é: " + consumoComGasolina.toFixed(2) + " litros." + "<br>" );
document.write("O consumo do carro com alcool é: " + consumoComAlcool.toFixed(2) + " litros." + "<br>" );
document.write("O preco do km do alcool é: " + precoPorLitroAlcool.toFixed(2)  + "<br>" );
document.write("O preco do km da gasolina é: " + precoPorLitroGasolina.toFixed(2)  + "<br>" );

