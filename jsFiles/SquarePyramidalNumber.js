/*Recebe o número de "andares" de uma pirâmide
quantos elementos haverá dentro dela*/

function numberSquares(n) {
	var n3 = Math.pow(n,3);
	var n2 = Math.pow(n,2);
	return(n3/3+n2/2+n/6);
}