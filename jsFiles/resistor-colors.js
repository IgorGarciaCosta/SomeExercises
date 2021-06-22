/*
Esse código recebe um saquencia de cores
presentes em um resistor e as converte em
um valor final referente à resistència dele.
*/


const colors = ['Orange', 'Green', 'White', 'Blue', 'Brown', 'Black'];
const colorCode = (colors) => {
  console.log(colors);
  var numbers  =[];
  var aux = 0
  for(let i=0; i<colors.length;i++){
    switch (colors[i]){
      case 'Orange':
        numbers[aux] = 3;
        aux++;
        break;
        case 'Green':
          numbers[aux] = 5;
          aux++;
          break; 
          case 'White':
            numbers[aux] = 9;
            aux++;
            break;  
          case 'Blue':
            numbers[aux] = 6;
            aux++;
            break; 
          case 'Brown':
            numbers[aux] = 1;
            aux++;
            break;  
          case 'Black':
            numbers[aux] = 0;
            aux++;
            break;  
          default:
            numbers[aux] = 'error' 
            aux++; 
    }
  }

  console.log(numbers);
  var finalValue = numbers.join("");
  console.log(finalValue);
};


colorCode(colors)