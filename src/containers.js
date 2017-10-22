import Scoreboard from './components/scoreboard'
import Dealer from './components/dealer'
import Player from './components/player'
import Controls from './components/controls'

import { connect } from 'react-redux'
import { pick, identity } from 'ramda'
import { hit, stay, newgame } from './action-creators'

export const DealersHand = connect(pick(['dealer', 'game']))(Dealer)
export const PlayersHand = connect(pick(['player', 'game']))(Player)
export const ScoreboardContainer = connect(pick(['game']))(Scoreboard)
export const ControlsContainer = connect(identity, mapActionsToProps)(Controls)

function mapActionsToProps(dispatch) {
  return {
    hit: e => dispatch(hit),
    stay: e => dispatch(stay),
    newgame: e => dispatch(newgame)
  }
}
