/*
Recebe um array com a sequência de dna
e converte na resuktante em rna. 
*/

const dnaNucleotides = ['G', 'C', 'T', 'A'];
const toRna = (dnaNucleotides) => {
  var aux = 0;
  var rnaNucleotides = [];
  for(let i=0;i<dnaNucleotides.length;i++){
    switch(dnaNucleotides[i]){
      case 'G':
        rnaNucleotides[aux] = 'C'
        aux++;
        break;
      case 'T':
        rnaNucleotides[aux] = 'A'
        aux++;
        break;
      case 'C':
        rnaNucleotides[aux] = 'G'
        aux++;
        break;
      case 'A':
        rnaNucleotides[aux] = 'U'
        aux++;
        break;  
      default:
        rnaNucleotides[aux] = 'erro'
        aux++;
        break;      
    }
  }

  console.log(dnaNucleotides);
  console.log(rnaNucleotides);
};

toRna(dnaNucleotides);