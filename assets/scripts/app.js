'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.box').on('click', authEvents.onMove)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('#update-game').on('click', authEvents.onUpdateGame)
  $('#show-games').on('submit', authEvents.onShowGames)
})
