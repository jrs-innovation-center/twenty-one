import {
  assoc,
  add,
  contains,
  equals,
  compose,
  reduce,
  sort,
  pluck,
  flip,
  always,
  T,
  cond
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

const calcAce = score => (add(11, score) < 22 ? 11 : 1)
const faceCards = ['JACK', 'QUEEN', 'KING']
const aceLast = (a, b) => (a === 'ACE' ? 1 : -1)

const reducer = (acc, value) =>
  add(
    acc,
    cond([
      [flip(contains)(faceCards), always(10)],
      [equals('ACE'), () => calcAce(acc)],
      [T, Number]
    ])(value)
  )

export const getScore = compose(
  reduce(reducer, 0),
  sort(aceLast),
  pluck('value')
)
