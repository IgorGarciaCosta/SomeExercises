//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const prompt = require('prompt-sync')();

var jogadaX = (player) => {
  var xi = prompt("\nX player i position (line): ")
  var xj = prompt("X player j position (column): ")
  player = 1
  chechIfIsValidPosition(xi, xj, matrix, player);
}

var jogadaY = (player) => {
  var yi = prompt("\nY player i position (line): ")
  var yj = prompt("Y player j position (column): ")
  player = 2
  chechIfIsValidPosition(yi, yj, matrix, player);
}

var start = () => {
  printBoard(matrix);
  var player
  jogadaX(player)
  jogadaY(player)
}

var chechIfIsValidPosition = (iValue, jValue, matrix, player) => {

  console.log("Posição: " + matrix[iValue][jValue])
  if (matrix[iValue][jValue] == '-' || matrix[iValue][jValue] == 'x' || matrix[iValue][jValue] == '0') {
    console.log('\nPosição inválida, jogue novamente: ')
    player == 1
      ? jogadaX(player)
      : jogadaY(player)
  }
  else if (matrix[iValue][jValue] == '.') {
    putValuesOnBoard(iValue, jValue, player)
  }

}

var chechIfXwon = (iValue, jValue) => {
  iValue = parseInt(iValue)
  jValue = parseInt(jValue)
  if (iValue == 4) {
    printBoard(matrix);
    console.log("\nX WON!")
    process.exit()
  }
}

var checkIfYwon = (iValue, jValue) => {
  mixedNumber = parseInt(iValue + jValue)

  switch (mixedNumber) {
    case 04:
      printBoard(matrix);
      console.log("\nY WON!")
      process.exit()

    case 15:
      printBoard(matrix);
      console.log("\nY WON!")
      process.exit()

    case 26:
      printBoard(matrix);
      console.log("\nY WON!")
      process.exit()

    case 37:
      printBoard(matrix);
      console.log("\nY WON!")
      process.exit()

    case 48:
      printBoard(matrix);
      console.log("\nY WON!")
      process.exit()

    default:
      break;
  }
}

var putValuesOnBoard = (iValue, jValue, player) => {
  if (player == 1) {
    matrix[iValue][jValue] = 'x'
    chechIfXwon(iValue, jValue)
  }
  else if (player == 2) {
    matrix[iValue][jValue] = '0'
    checkIfYwon(iValue, jValue)
  }


  printBoard(matrix)

}


var printBoard = (matrix) => {

  console.log("printing: ")

  for (let lin = 0; lin < 5; lin++) {
    for (let col = 0; col < 9; col++) {
      process.stdout.write(matrix[lin][col] + " ");

    }
    process.stdout.write('\n');
  }
  // for(k=0;k<5;k++){
  //   for(l=0;l<9;l++){
  //     process.stdout.write(matrix[k],[l])
  //   }
  //   process.stdout.write('\n')
  // }
}

var matrix = [
  ['.', '.', '.', '.', '.', ' ', ' ', ' ', ' '],
  [' ', '.', '.', '.', '.', '.', ' ', ' ', ' '],
  [' ', ' ', '.', '.', '.', '.', '.', ' ', ' '],
  [' ', ' ', ' ', '.', '.', '.', '.', '.', ' '],
  [' ', ' ', ' ', ' ', '.', '.', '.', '.', '.'],

]

start();
