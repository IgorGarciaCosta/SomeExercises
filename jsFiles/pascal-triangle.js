// Algoritmo que desenha um triângulo de pascal baseado no
// número de linhas disponibilizado pelo usuário


const prompt = require('prompt-sync')();

var triangleContructor = (numRows) => {

  let triangle = [[1], [1, 1]]

  if (numRows == 1) return [[1]]
  else if (numRows == 2) return triangle
  else {
    for (let i = 2; i < numRows; i++) {
      addRow(triangle)
    }
  }

  return triangle


};

var addRow = (triangle) => {
  let previous = triangle[triangle.length - 1]
  let newRow = [1]
  for (let i = 0; i < previous.length-1; i++) {
    let current = previous[i]
    let next = previous[i + 1]==NaN?previous[i]:previous[i + 1]
    newRow.push(current + next)
  }
  newRow.push(1)
  return triangle.push(newRow)
}

var validate = (numRows) => {
  if(isNaN(numRows))return false
  return true;
}

while (true) {
  var numRows = prompt("\nNumber of rows (exit: Press 0): ")
  if (numRows == 0) {
    process.exit()
  }
  else if (validate(numRows)) {
    console.log(triangleContructor(numRows))
  }

  else {
    console.log("Invalid value. Type again: ")
  }
}

