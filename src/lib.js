import {
  assoc,
  add,
  contains,
  equals,
  compose,
  reduce,
  sort,
  map,
  prop
} from 'ramda'
import fetch from 'isomorphic-fetch'
const url = 'https://deckofcardsapi.com/api/deck'

export const createDeck = () => {
  return fetch(url + '/new/shuffle/?deck_count=6')
    .then(res => res.json())
    .then(result => result.deck_id)
}

export const drawCard = id => {
  return fetch(`${url}/${id}/draw/?count=1`)
    .then(res => res.json())
    .then(result => assoc('key', Number(new Date()), result.cards[0]))
}

export const drawFive = id => {
  return fetch(`${url}/${id}/draw/?count=5`)
    .then(res => res.json())
    .then(result => result.cards)
}

const calcAce = score => {
  return add(11, score) < 22 ? 11 : 1
}

const faceCards = ['JACK', 'QUEEN', 'KING']
const aceLast = (a, b) => (a === 'ACE' ? 1 : -1)
const reducer = (acc, value) => {
  acc += contains(value, faceCards) ? 10 : 0
  acc += Number(value) ? Number(value) : 0
  acc += equals('ACE', value) ? calcAce(acc) : 0
  return acc
}

export const getScore = compose(
  reduce(reducer, 0),
  sort(aceLast),
  map(prop('value'))
)
