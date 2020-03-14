
const gameState = require('./events.js')

// to avoid circular dependancies, I should work on refactoring some of this code and then copy and paste it back into events.js

// for each console.log (which will be message updates) show winning player by lowest index in winning 3-in-a-row sequence

const checkWin = function () {
  if (gameState[0] !== '' && gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
  } else if (gameState[3] !== '' && gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
    $('#message').text(`Player ${gameState[3]} WINS`)
    console.log(`Player ${gameState[3]} WINS`)
  } else if (gameState[6] !== '' && gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
    $('#message').text(`Player ${gameState[6]} WINS`)
    console.log(`Player ${gameState[6]} WINS`)
  } else if (gameState[0] !== '' && gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
  } else if (gameState[1] !== '' && gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
    $('#message').text(`Player ${gameState[1]} WINS`)
    console.log(`Player ${gameState[1]} WINS`)
  } else if (gameState[2] !== '' && gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
    $('#message').text(`Player ${gameState[2]} WINS`)
    console.log(`Player ${gameState[2]} WINS`)
  } else if (gameState[0] !== '' && gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
  } else if (gameState[2] !== '' && gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
  }
}

  else if (gameState[0] !== '' && gameState[1] !== '' && gameState[2] !== '' && gameState[3] !== '' && gameState[4] !== '' && gameState[5] !== '' && gameState[6] !== '' && gameState[7] !== '' && gameState[8] !== '') {
    console.log('GAME ENDS IN A TIE')
  }



if (gameState[0] === 'o' && gameState[1] === 'o' && gameState[2] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} if (gameState[3] === 'o' && gameState[4] === 'o' && gameState[5] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} if (gameState[6] === 'o' && gameState[7] === 'o' && gameState[8] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} if (gameState[0] === 'o' && gameState[3] === 'o' && gameState[6] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} if (gameState[1] === 'o' && gameState[4] === 'o' && gameState[7] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} if (gameState[2] === 'o' && gameState[5] === 'o' && gameState[8] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} if (gameState[0] === 'o' && gameState[4] === 'o' && gameState[8] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} if (gameState[2] === 'o' && gameState[4] === 'o' && gameState[6] === 'o') {
  console.log('PLAYER o WINS YAYYYYYYYY')
} else if (gameState[0] !== '' && gameState[1] !== '' && gameState[2] !== '' && gameState[3] !== '' && gameState[4] !== '' && gameState[5] !== '' && gameState[6] !== '' && gameState[7] !== '' && gameState[8] !== '') {
  console.log('GAME ENDS IN A TIE')
}



// export checkWin
