import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cond, equals, always, T, pick, prop, compose } from 'ramda'

export default createStore(
  combineReducers({
    game,
    player,
    dealer
  }),
  applyMiddleware(thunk)
)

const grab = (name, action) =>
  compose(prop(name), pick([name]), prop('payload'))(action)

function game(state = { wins: 0, status: 'OFF' }, action) {
  return cond([
    [equals('SET_GAME'), () => action.payload],
    [equals('RESET'), () => grab('game', action)],
    [T, always(state)]
  ])(action.type)
}

function player(state = [], action) {
  return cond([
    [equals('SET_PLAYER'), () => action.payload],
    [equals('RESET'), () => grab('player', action)],
    [T, always(state)]
  ])(action.type)
}

function dealer(state = [], action) {
  return cond([
    [equals('SET_DEALER'), () => action.payload],
    [equals('RESET'), () => grab('dealer', action)],
    [T, always(state)]
  ])(action.type)
}
