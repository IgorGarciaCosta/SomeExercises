
/*
This page gets x and y values from teh user 
and constrols a simulated robot movement.
*/


const prompt = require('prompt-sync')();

class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

class Robot {
  constructor(moves, x, y, facing) {
    this.moves = moves;
    this.x = x;
    this.y = y;
  }

  get coord() {
    return this.movimentation();
  }
  movimentation() {
    try {
      for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
          case 'r':
            switch (facing) {
              case 'up':
                facing = 'right';
                break;
              case 'left':
                facing = 'up';
                break;
              case 'right':
                facing = 'down';
                break;
            }
            break;
          case 'l':
            switch (facing) {
              case 'up':
                facing = 'left';
                break;
              case 'left':
                facing = 'down';
                break;
              case 'right':
                facing = 'up';
                break;
            }
            break;
          case 'a':
            switch (facing) {
              case 'up':
                y++;
                break;
              case 'left':
                x--;
                break;
              case 'right':
                x++;
                break;
              case 'down':
                y--;
                break;
            }

            break;
          default:
            break;
        }
      }
      return moves;
    }
    catch (Error) {
      throw new Error('Error ocurred in coordinates function');
    }
  }
 
}

var validateCoord = (moves) => {
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'r':

        break;
      case 'l':

        break;
      case 'a':

        break;
      default:
        return false;
    }
  }
  return true;
}

var x = 0;
var y = 0;
var facing = 'up'

while (true) {
  console.log('Current position: ' + x + ' ' + y)
  var move = prompt("Digit robot move: ")
  var moves = []
  moves = move.split('')
  if (validateCoord(moves)) {
    rob = new Robot(moves, x, y, facing)
    console.log(rob.coord);
  }
  else console.log('\nInvalid coordinates, type again\n')
}

