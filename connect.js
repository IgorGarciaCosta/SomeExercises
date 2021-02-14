//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const prompt = require('prompt-sync')();

var gameSatus = true;

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

  if ((iValue < 0 || iValue > 4) || (jValue < 0 || jValue > 8)) {
    console.log('\nPosição inválida, jogue novamente: ')
    player == 1
      ? jogadaX(player)
      : jogadaY(player)
  }

  console.log("Posição: " + matrix[iValue][jValue])
  if (matrix[iValue][jValue] == '-' || matrix[iValue][jValue] == 'x' || matrix[iValue][jValue] == '0') {
    console.log('\nPosição inválida, jogue novamente: ')
    player == 1
      ? jogadaX(player)
      : jogadaY(player)
  }
  else if (matrix[iValue][jValue] == '.') {

    player == 1
      ? checkIfXPositionisValid(iValue, jValue, matrix, player)
      : checkIfYPositionisValid(iValue, jValue, matrix, player);

  }

}



var checkIfYPositionisValid = (iValue, jValue, matrix, player) => {
  iValue = parseInt(iValue)
  console.log(iValue + 1)
  console.log(jValue - 1)



  if ((iValue == 0) || (iValue == jValue)) {//is in the first column
    putValuesOnBoard(iValue, jValue, player)
  }
  //os dois ultimos parenteses dão erro
  else if ((matrix[iValue - 1][jValue] == '0') || (matrix[iValue - 1][jValue - 1] == '0') || (matrix[iValue][jValue - 1] == '0') || (matrix[iValue + 1][jValue - 1] == '0') || (matrix[iValue + 1][jValue] == '0')) {
    putValuesOnBoard(iValue, jValue, player)
  }
  else {
    console.log('\nPosição inválida, jogue novamente: ')
    jogadaY(player)
  }
}

var checkIfXPositionisValid = (iValue, jValue, matrix, player) => {
  //iValue = parseInt(iValue)
  console.log(iValue + 1)
  console.log(jValue - 1)


  if (iValue == 0) {//is in the first line
    putValuesOnBoard(iValue, jValue, player)
  }

  else if ((matrix[iValue - 1][jValue - 1] == 'x') || (matrix[iValue][jValue - 1] == 'x') || (matrix[iValue - 1][jValue] == 'x') || (matrix[iValue - 1][jValue + 1] == 'x') || (matrix[iValue][jValue + 1] == 'x')) {
    putValuesOnBoard(iValue, jValue, player)
  }
  else {
    console.log('\nPosição inválida, jogue novamente: ')
    jogadaX(player)
  }
}

var chechIfXwon = (iValue, jValue) => {
  iValue = parseInt(iValue)
  jValue = parseInt(jValue)
  if (iValue == 4) {
    printBoard(matrix);
    console.log("\nX WON!")
    gameSatus = false;
  }
}

var checkIfYwon = (iValue, jValue) => {
  mixedNumber = parseInt(iValue + jValue)

  switch (mixedNumber) {
    case 04:
      printBoard(matrix);
      console.log("\nY WON!")
      gameSatus = false;

    case 15:
      printBoard(matrix);
      console.log("\nY WON!")
      gameSatus = false;

    case 26:
      printBoard(matrix);
      console.log("\nY WON!")
      gameSatus = false;

    case 37:
      printBoard(matrix);
      console.log("\nY WON!")
      gameSatus = false;

    case 48:
      printBoard(matrix);
      console.log("\nY WON!")
      gameSatus = false;

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
}

var matrix = [
  ['.', '.', '.', '.', '.', ' ', ' ', ' ', ' '],
  [' ', '.', '.', '.', '.', '.', ' ', ' ', ' '],
  [' ', ' ', '.', '.', '.', '.', '.', ' ', ' '],
  [' ', ' ', ' ', '.', '.', '.', '.', '.', ' '],
  [' ', ' ', ' ', ' ', '.', '.', '.', '.', '.'],

]


while (gameSatus) {
  start();
}

