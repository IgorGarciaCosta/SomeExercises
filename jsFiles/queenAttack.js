
class QueenAttack {
    constructor(queen = [], points = []) {
      this.queen = queen;
      this.points = points;
    }
  
  
    matrix = () => {
      var queenRow = this.queen[0];
      var queenColumn = this.queen[1];
      var pointRow = this.points[0];
      var pointColumn = this.points[1];
      
      var matrix = [
        ['-', '-', '-','-', '-', '-','-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-'],
        
      ]
  
      matrix[queenRow][queenColumn] = "R";
      matrix[pointRow][pointColumn] = "P";
  
      for (let lin = 0; lin < 8; lin++) {
        for (let col = 0; col < 8; col++) {
          process.stdout.write(matrix[lin][col] + " ");
          
        }
        process.stdout.write('\n');
      }
    }
  
    canAttack = () => {
      var queenRow = this.queen[0];
      var queenColumn = this.queen[1];
      var pointRow = this.points[0];
      var pointColumn = this.points[1];
  
      if (queenRow == pointRow) return true;
      if (queenColumn == pointColumn) return true;
      if (Math.abs(queenRow - pointRow) == Math.abs(queenColumn - pointColumn)) return true;
  
      return false; //a rainha não pega
    }
  
    printa = () => {
      var queenRow = this.queen[0];
      var queenColumn = this.queen[1];
      console.log(queenColumn);
    }
  }
  
  var jogo = new QueenAttack([3, 4], [1, 2]);
  jogo.canAttack()?console.log('A rainha pegou!'):console.log('A rainha não pega!')
  console.log(jogo.matrix()); 
  