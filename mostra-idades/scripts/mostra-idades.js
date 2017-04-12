var pulaLinha = function(){
	document.write("<br>");
	document.write("<br>");
	document.write("<hr>");
	document.write("<br>");
};
var mostra = function(frase){
	document.write(frase);
	pulaLinha();
};

var ano = 2017;
var minhaIdade = ano - 1990;
var idadeBruno = ano - 1991;
var idadeGustavo = ano - 1993;
var idadeNicole = ano - 1989;
var mediaIdade = (minhaIdade + idadeBruno + idadeGustavo + idadeNicole) / 4;

mostra("Minha idade é: " + minhaIdade);
mostra("A idade do Bruno é: " + idadeBruno);
mostra("A idade do Gustavo é: " + idadeGustavo);
mostra("A idade da Nicole é: " + idadeNicole);
mostra("A nossa média de idades é: " + Math.round(mediaIdade));

console.log("Sua função está correta!");
