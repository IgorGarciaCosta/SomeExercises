/*essa função recebe uma string e retorna outra
que possui as vogais antes, as consoantes depois
 e ambos ordenados.
*/

const s = 'learnjavascriptloopsinhackerrankweekofcode'
function vowelsAndConsonants(s) {
    var letters = s.split('')//separa as letras num array
    var vowels=[];
    var vowelsIterator=0;
    var consonants=[];
    var consonantsIterator=0;
    
    for(let i=0; i<letters.length; i++){
        if(letters[i]==='a'||letters[i]==='e'||letters[i]==='i'||letters[i]==='o'||letters[i]==='u') {
            vowels[vowelsIterator] = letters[i];
            vowelsIterator++;
        }
        else {
            consonants[consonantsIterator] =letters[i];
            consonantsIterator++;
        }
        
    }
    
    var finalVowels = vowels
    var finalConsonants = consonants
    var end = finalVowels.concat(finalConsonants)

    

    return(end);
}

console.log(vowelsAndConsonants(s))


