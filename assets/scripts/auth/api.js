'use strict'

const config = require('../config.js')
const store = require('../store.js')
// wait why do I require events here?
const events = require('./events.js')

const signUp = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data

  })
}

const signIn = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('In api.js')
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
  console.log('In api.js')
  return $.ajax({
    // not sure what to update the url to
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'POST',
    data: {
      // I copied and pasted what was in the documentation
      // I don't think I need all of this, just a POST request and then store what it gives me back
      // it will give me an game id and maybe something else that I can store in store.js
      // "game": {
      //   "id": 3,
      //   "cells": ["","","","","","","","",""],
      //   "over": false,
      //   "player_x": {
      //     "id": 1,
      //     "email": store.email,
      //     "player_o": null
      //   }
      // }
    }
  }
  )
}
// make a updatemove api request and use data from the do

// for this, I think I need to return the index of each move and the value (x or o) and import it here somehow
// I should export a lot of this stuff to store.js and then import it here
const updateGame = function (data) {
  console.log('ran updateMoveSuccess in api.js')
  return $.ajax({
    // I need to update the url with the correct url
    url: config.apiUrl + '/update-game',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "game": /* get the game id from store.js */ {
        "cell": {
          "index": 0, /* get the playerTileChoice from events.js */
          "value": "x" /* get currentTurn from events.js */
        },
        "over": false
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  updateGame,
  newGame
}
