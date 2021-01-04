/*analisa entre dois arrays se o val de um é levemente 
superior ao outro ou se são iguais. 
EXEMPLO:
isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
*/

function veSeEIgual(arr1, arr2){//confere se os arrays são iguais
	var todosIguais = 0;
	for(let i=0; i<arr1.length; i++){
		if(arr1[1]===arr2[i]) todosIguais++;
	}
	if(todosIguais==arr1.legth){
		return true//true se forem iguais
	}
	return false;//false se não forem iguais
}

function isFirstSuperior(arr1, arr2) {
	var confere = veSeEIgual(arr1, arr2);
	if(confere){
		return true;//se forem iguais
	}
	
	return arr1>arr2;//se não forem iguais, vê se o arr2 é maior
}