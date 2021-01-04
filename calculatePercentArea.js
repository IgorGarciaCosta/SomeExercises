/*
Essa função recebe um nome e a área 
de um país e retorna o tamanho dessa
área em relação ao planeta.
*/

function areaOfCountry(name, area) {
	var percent = (100*area)/(148940000);
	var resposta = name +" is "+ percent.toFixed(2) +"% of the total world's landmass"
	return (resposta);
}