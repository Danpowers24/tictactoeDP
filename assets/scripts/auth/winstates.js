
// require gameState

if (gameState[0] === 'x' && gameState[1] === 'x' && gameState[2] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[3] === 'x' && gameState[4] === 'x' && gameState[5] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[6] === 'x' && gameState[7] === 'x' && gameState[8] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[0] === 'x' && gameState[3] === 'x' && gameState[6] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[1] === 'x' && gameState[4] === 'x' && gameState[7] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[2] === 'x' && gameState[5] === 'x' && gameState[8] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[0] === 'x' && gameState[4] === 'x' && gameState[8] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[2] === 'x' && gameState[4] === 'x' && gameState[6] === 'x') {
  console.log('PLAYER X WINS YAYYYYYYYY')
  $('#message').text('Player X wins!')
} else if (gameState[0] !== '' && gameState[1] !== '' && gameState[2] !== '' && gameState[3] !== '' && gameState[4] !== '' && gameState[5] !== '' && gameState[6] !== '' && gameState[7] !== '' && gameState[8] !== '') {
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
