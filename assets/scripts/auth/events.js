'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api.js')

const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Changing Password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Signing out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

let gameOver = false

let gameState = ['', '', '', '', '', '', '', '', '']
// check for wins, each winstate of 3-in-a-row translates to 8 different combinations of a certain 3 indices
const checkWin = function () {
  if (gameState[0] !== '' && gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
    $('#message').text('Player ' + gameState[0] + ' WINS')
    console.log(`Player ${gameState[0]} WINS`)
    gameOver = true
    console.log('gameOver = true')
  } else if (gameState[3] !== '' && gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
    $('#message').text(`Player ${gameState[3]} WINS`)
    console.log(`Player ${gameState[3]} WINS`)
    gameOver = true
    console.log('gameOver = true')
  } else if (gameState[6] !== '' && gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
    $('#message').text(`Player ${gameState[6]} WINS`)
    console.log(`Player ${gameState[6]} WINS`)
    gameOver = true
    console.log('gameOver = true')
  } else if (gameState[0] !== '' && gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
    gameOver = true
    console.log('gameOver = true')
  } else if (gameState[1] !== '' && gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
    $('#message').text(`Player ${gameState[1]} WINS`)
    console.log(`Player ${gameState[1]} WINS`)
    gameOver = true
    console.log('gameOver = true')
  } else if (gameState[2] !== '' && gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
    $('#message').text(`Player ${gameState[2]} WINS`)
    console.log(`Player ${gameState[2]} WINS`)
    gameOver = true
    console.log('gameOver = true')
  } else if (gameState[0] !== '' && gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
    gameOver = true
    console.log('gameOver = true')
  } else if (gameState[2] !== '' && gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
    $('#message').text(`Player ${gameState[2]} WINS`)
    console.log(`Player ${gameState[2]} WINS`)
    gameOver = true
    console.log('gameOver = true')
    // else if every tile !== '' and none of the win states are true, then it is a tie
  } else if (gameState[0] !== '' && gameState[1] !== '' && gameState[2] !== '' && gameState[3] !== '' && gameState[4] !== '' && gameState[5] !== '' && gameState[6] !== '' && gameState[7] !== '' && gameState[8] !== '') {
    console.log('The game ends in a tie!')
    $('#message').text('Game ends in a tie')
    gameOver = true
  } else {
    console.log('no winner yet, keep playing')
  }
}

let turn = 'x'
// storing current gameState array

const onMove = function (event) {
  $('#message').text('')
  console.log('...a move was made...')
  const playerTileChoice = event.target.id
  console.log('playerTileChoice/what the index of the array to be filled will be = ' + playerTileChoice)
  const boxContent = $(event.target).text()
  // console.log('boxContent = ' + boxContent)
  // if the game is over
  if (gameOver === true) {
    console.log('Game over, press "New Game" button to start a new game!')
    $('#message').text(`Game over. Press "New Game" to start a new game.`)
    return
  // If the space is already taken
} else if (boxContent === 'x' || boxContent === 'o') {
    // give the user a warning that the space is already taken
    $('#message').text('Error, space already taken, try again')
    console.log('Error, space already taken, try again')
    return
  // if there is a free space
} else {
    // make the box the value of the turn
    const boxContent = $(event.target).text(turn)
    // flip the value of turn after each turn
    if (turn === 'x') {
      // take this value export this as a variable (currentTurn) and then return it
      const currentTurn = turn
      // fill the empty array with an x or o at the index that corresponds to the playerTileChoice
      gameState[playerTileChoice] = turn
      // console.log the array to check what it is doing
      console.log('This is the gameState array: ' + gameState)
      // check if this move created a winner
      checkWin()
      // update the API with 'x'
      // pass in playerTileChoice (index) to update API
      turn = 'o'
      console.log('currentTurn = ' + currentTurn)
      return currentTurn
    }
  } if (turn === 'o') {
    const currentTurn = turn
    // fill the empty array with an x or o at the index that corresponds to the playerTileChoice
    gameState[playerTileChoice] = turn
    // console.log the array to check what it is doing
    console.log('This is the gameState array: ' + gameState)
    // check if this move created a winner
    checkWin()
    // change turns
    turn = 'x'
    console.log('currentTurn = ' + currentTurn)
    return currentTurn
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('New game button clicked')
  $('.box').text('')
  gameState = ['', '', '', '', '', '','', '', '']
  gameOver = false
  turn = 'x'
  // write code to clear the gameState array when the function is called (newGame button clicked)
      // const gameState = ['', '', '', '', '', '','', '', '']
      // console.log('new gameState array is ' + gameState)
  // wipe the game board
}

// pass in playerTileChoice (index) to update API at end of second tie code
// update the API with 'o'
// isOver = true or false depending on if there is a winner or draw

// make a variable that holds my 'sendGameData' then I can send that to the api
// must be in the format dictated by the API's rules (in documentation and below)
//         {
//   "game": {
//     "cell": {
//       "index": 0,
//       "value": "x"
//     },
//     "over": false
//   }
// }
// isOver = true or false depending on if there is a winner or draw

//stuff
// it's going to be a button so I have to preventDefault
// make send the api request to start the game
// turn

const onStartGame =
//  preventDefault
// this will launch on sing in success
  // if (signInSuccess = true)
  //

// modify the DOM by adding an empty string to each game board space
// make a function to add test text to it
// if contents of the game board space are empty, then populate it with the test stuff
// else display a message "sorry! that space is already taken"




module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onMove,
  onNewGame,
  gameState
}
