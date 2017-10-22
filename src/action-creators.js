import { clone, append, reduceWhile, flip } from 'ramda'
import store from './store'
import { createDeck, drawCard, getScore, drawFive } from './lib'

export const hit = async (dispatch, getState) => {
  // need to clone to force immutability
  const state = clone(getState())
  state.player = append(await drawCard(state.game.deck), state.player)

  if (getScore(state.player) > 21) {
    state.game.status = 'LOSE - BUSTED'
  }

  state.game.player = getScore(state.player)
  state.game.dealer = getScore(state.dealer)

  dispatch({ type: 'SET_PLAYER', payload: state.player })
  dispatch({ type: 'SET_GAME', payload: state.game })
}

export const stay = async (dispatch, getState) => {
  // need to clone to force immutability
  const state = clone(getState())

  const dealerScore = getScore(state.dealer)
  // get next 5 cards
  const cards = await drawFive(state.game.deck)

  // reduceWhile not busted
  state.dealer = reduceWhile(
    (hand, card) => getScore(hand) < 17,
    flip(append),
    state.dealer,
    cards
  )

  state.game.player = getScore(state.player)
  state.game.dealer = getScore(state.dealer)

  // got greater than min did dealer bust
  if (state.game.dealer > 21) {
    state.game.status = 'WINNER'
    state.game.wins += 1
  } else if (state.game.dealer > getScore(state.player)) {
    state.game.status = 'LOSE'
  } else if (state.game.dealer === state.game.player) {
    state.game.status = 'PUSH'
  } else {
    state.game.status = 'WINNER'
    state.game.wins += 1
  }
  dispatch({ type: 'SET_DEALER', payload: state.dealer })
  dispatch({ type: 'SET_GAME', payload: state.game })
}

export const newgame = async (dispatch, getState) => {
  // need to clone to force immutability
  const state = clone(store.getState())
  // clear hands
  state.player = []
  state.dealer = []
  // create new deck
  state.game.deck = state.game.deck ? state.game.deck : await createDeck()
  // deal card to player
  state.player = append(await drawCard(state.game.deck), state.player)
  // deal card to dealer
  state.dealer = append(await drawCard(state.game.deck), state.dealer)
  // deal card to player
  state.player = append(await drawCard(state.game.deck), state.player)
  // deal card to dealer
  state.dealer = append(await drawCard(state.game.deck), state.dealer)
  // console.log(state)
  state.game.status = 'ON'
  state.game.player = getScore(state.player)
  state.game.dealer = getScore(state.dealer)

  dispatch({ type: 'NEWGAME', payload: state })
}

// export const shuffle = async () => {
//   const state = R.clone(store.getState())
//   // clear hands
//   state.player = []
//   state.dealer = []
//   // create new deck
//   state.game.deck = await createDeck()
//   // deal card to player
//   state.player = R.append(await drawCard(state.game.deck), state.player)
//   // deal card to dealer
//   state.dealer = R.append(await drawCard(state.game.deck), state.dealer)
//   // deal card to player
//   state.player = R.append(await drawCard(state.game.deck), state.player)
//   // deal card to dealer
//   state.dealer = R.append(await drawCard(state.game.deck), state.dealer)
//   // console.log(state)
//   state.game.status = 'ON'
//   state.game.player = getScore(state.player)
//   state.game.dealer = getScore(state.dealer)
//
//   store.setState(state)
// }
