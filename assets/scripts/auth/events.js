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

const makeMove = function (event) {
  console.log('makeMove happened ...')
  const playerTileChoice = event.target.id
  // once this is done testing, take out line 51
  console.log(playerTileChoice)
  const boxContent = $(event.target).text()
  console.log(boxContent)
  if (boxContent === 'x' || boxContent === 'o') {
    $('#message').text('Error, space already taken, try again')
  // if playChoice is nothing
  } else if (boxContent !== 'x' || boxContent !== 'o') {
    // make the box the value of the turn
    const boxContent = $(event.target).text(turn)
    if (turn === 'x') {
      turn = 'o'
    } else if (turn === 'o') {
      turn = 'x'
    }
    $('#message').text('')
  }
}





// modify the DOM by adding an empty string to each game board space
// make a function to add test text to it
// if contents of the game board space are empty, then populate it with the test stuff
// else display a message "sorry! that space is already taken"




module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  makeMove
}
