'use strict'

const config = require('../config.js')
const store = require('../store.js')
// wait why do I require events here?
const events = require('./events.js')

const signUp = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const newGame = function () {
  // console.log('In api.js: newGame function has been called and ran')
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// I should export a lot of this stuff to store.js and then import it here
const updateGame = function (data) {
  // test to see if this function gets called
  // console.log('ran updateMoveSuccess in api.js')
  // test to see what gets stored
  // console.log(store.game.cells)
  // AJAX call
  return $.ajax({
    // I need to update the url with the correct url
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showGame = function () {
  // console.log('showGame function was called in api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  updateGame,
  newGame,
  showGame
}
