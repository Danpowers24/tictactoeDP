'use strict'

const store = require(('../store.js'))

$(function () {
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.game-board-container').addClass('hidden')
  $('#new-game').addClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
})

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is: ', data)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signUpFailure = function (error) {
  $('#message').text('Something went wrong when signing up, please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is: ', data)
  store.user = data.user
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#new-game').removeClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

// make a new const 'new game succeess' and new game failure
// store.game = data.game
// looks like youri also just stored his in the events.js file yes, onNewGame is the name of my funciton/VARIABLE

const signInFailure = function (error) {
  $('#message').text('Invalid credentials, please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess data is: ', data)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordFailure = function (error) {
  $('#message').text('Failed to change password, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signOutSuccess = function (data) {
  $('#message').text('You have successfully signed out. Thanks for playing!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess data is: ', data)
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.game-board-container').addClass('hidden')
  $('#new-game').addClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signOutFailure = function (data) {
  $('#message').text('You are not signed out yet! Something went wrong.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure data is: ', data)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const udpateGameSuccess = function (data) {
  console.log('in ui.js: updateGame function has run, success!')
}

const udpateGameFailure = function (data) {
  console.log('in ui.js: updateGame function has failed')
}

const newGameSuccess = function (data) {
  console.log('newGameSuccess was called and ran')
}

const newGameFailure = function (data) {
  console.log('newGameFailure was called and ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure
  // updateGameSuccess,
  // updateGameFailure
}
