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

// function to make clicks log to the console
let turn = 'x'

const onMove = function (event) {
  console.log('onMove happened ...')
  const playerTileChoice = event.target.id
  console.log(playerTileChoice)
  const boxContent = $(event.target).text()
  console.log(boxContent)
  // If the space is already taken
  if (boxContent === 'x' || boxContent === 'o') {
    // give the user a warning that the space is already taken
    $('#message').text('Error, space already taken, try again')
    console.log('Error, space already taken, try again')
  // if there is a free space
} else {
    // make the box the value of the turn
    const boxContent = $(event.target).text(turn)
    // flip the value of turn after each turn
    if (turn === 'x') {
      // update the API with 'x'
      // pass in playerTileChoice (index) to update API
      // isOver = true or false depending on if there is a winner or draw
      turn = 'o'
    } else if (turn === 'o') {


      // pass in playerTileChoice (index) to update API
      // update the API with 'o'
      // isOver = true or false depending on if there is a winner or draw

      turn = 'x'
    }
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

    // do the above after I code the wins states

    // upon a valid move, clear the error message
    $('#message').text('')
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('New game button clicked')
  // wipe the game board
}

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
  onNewGame
}
