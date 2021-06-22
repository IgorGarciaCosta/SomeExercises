/*
Esse código mostra uma função geradora.
A função dentro da add_suffix recebe apenas
a palavra que vem como parêmetro da add_ly 
e retorna ela junta com o sufixo.
*/

function add_suffix(suffix) {//função geradora
	return function(word){
		return word+suffix
	}
}

add_ly = add_suffix("ly")

console.log(add_ly("careless"))