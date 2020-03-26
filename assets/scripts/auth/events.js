'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api.js')

const ui = require('./ui.js')

const store = require('../store.js')

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

let gameOver

const gameObject = {
  "game": {
    "cell": {
      "index": playerTileChoice,
      "value": turn
    },
    "over": gameOver
  }
}

const onUpdateGame = function (gameObject) {
  event.preventDefault()
  console.log('onUpdateGame called')
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const gameIsAlreadyOverMessage = function () {
  console.log('Game over, press "New Game" button to start a new game!')
  $('#message').text(`Game over. Press "New Game" to start a new game.`)
}

let gameState = ['', '', '', '', '', '', '', '', '']
// check for wins, each winstate of 3-in-a-row translates to 8 different combinations of a certain 3 indices
const checkWin = function () {
  let gameOver = store.game.over
  if (gameState[0] !== '' && gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
    $('#message').text('Player ' + gameState[0] + ' WINS')
    console.log(`Player ${gameState[0]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
  } else if (gameState[3] !== '' && gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
    $('#message').text(`Player ${gameState[3]} WINS`)
    console.log(`Player ${gameState[3]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
  } else if (gameState[6] !== '' && gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
    $('#message').text(`Player ${gameState[6]} WINS`)
    console.log(`Player ${gameState[6]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
  } else if (gameState[0] !== '' && gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
  } else if (gameState[1] !== '' && gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
    $('#message').text(`Player ${gameState[1]} WINS`)
    console.log(`Player ${gameState[1]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
  } else if (gameState[2] !== '' && gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
    $('#message').text(`Player ${gameState[2]} WINS`)
    console.log(`Player ${gameState[2]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
  } else if (gameState[0] !== '' && gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    console.log(`Player ${gameState[0]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
  } else if (gameState[2] !== '' && gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
    $('#message').text(`Player ${gameState[2]} WINS`)
    console.log(`Player ${gameState[2]} WINS`)
    store.game.over = true
    console.log('gameOver = true')
    // else if every tile !== '' and none of the win states are true, then it is a tie
  } else if (gameState[0] !== '' && gameState[1] !== '' && gameState[2] !== '' && gameState[3] !== '' && gameState[4] !== '' && gameState[5] !== '' && gameState[6] !== '' && gameState[7] !== '' && gameState[8] !== '') {
    console.log('The game ends in a tie!')
    $('#message').text('Game ends in a tie')
    store.game.over = true
  } else {
    console.log('no winner yet, keep playing')
  }
}

let turn = 'x'
const playerTileChoice = null

const onMove = function (event) {
  // console.log(store)
  $('#message').text('')
  console.log('...a move was made...')
  // store the player's selected tile ID in playerTileChoice
  const playerTileChoice = event.target.id
  console.log('playerTileChoice = ' + playerTileChoice)
  const boxContent = $(event.target).text()
  // console.log('boxContent = ' + boxContent)
  // if the game is over
  if (store.game.over === true) {
    gameIsAlreadyOverMessage()
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
      store.game.cells[playerTileChoice] = turn
      // make gamestate array mirror store.game.cells
      gameState = store.game.cells
      // console.log the array to check what it is doing
      console.log('This is the gameState array: ' + gameState)
      // reassigning gameOver current winstate
      gameOver = store.game.over
      // check if this move created a winner
      checkWin()
      // switch the turn to o's turn
      turn = 'o'
      console.log('currentTurn = ' + currentTurn)
      // I want to see if I can return playerTileChoice instead of currentTurn
      // return playerTileChoice
      api.updateGame({
        'game': {
          'cell': {
            'index': playerTileChoice,
            'value': currentTurn
          },
          'over': store.game.over
        }
      })
      // test to see if the previous function was called
      console.log('onUpdateGame was called from inside onMove function')
      console.log(store.game.over)
    } else if (turn === 'o') {
      const currentTurn = turn
      // fill the empty array with an x or o at the index that corresponds to the playerTileChoice
      store.game.cells[playerTileChoice] = turn
      // make gamestate array mirror store.game.cells
      gameState = store.game.cells
      // console.log the array to check what it is doing
      console.log('This is the gameState array: ' + gameState)
      // reassigning gameOver current winstate
      gameOver = store.game.over
      // check if this move created a winner
      checkWin()
      // change turns
      turn = 'x'
      console.log('currentTurn = ' + currentTurn)
      // update the game with the current move
      api.updateGame({
        'game': {
          'cell': {
            'index': playerTileChoice,
            'value': currentTurn
          },
          'over': store.game.over
        }
      })
      // test to see if the previous function was called
      console.log('onUpdateGame was called from inside onMove function')
      console.log(store.game.over)
      return playerTileChoice
    }
  }
}

const onNewGame = function (event) {
  // prevent the page from reloading after button gets clicked
  event.preventDefault()
  console.log('New game button clicked')
  // clear the game board
  $('.box').text('')
  // clear the gameState array when the function is called (newGame button clicked)
  gameState = ['', '', '', '', '', '', '', '', '']
  // set the gameOver variable to false, indicating the game is not over
  gameOver = false
  // make sure 'Player X' always starts the game
  turn = 'x'
  // make sure the game board appears
  $('.game-board-container').removeClass('hidden')
  // clear the message
  $('#message').text('')
  // call the newGame function in api.js
  // pass this function token?
  const data = store.user.token
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onMove,
  onNewGame,
  gameState,
  playerTileChoice,
  onUpdateGame
}
