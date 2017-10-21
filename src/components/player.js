import React from 'react'
import Card from './card'
import { connect } from 'react-redux'
import { pick } from 'ramda'

const Player = props => (
  <div>
    {props.player.map(card => <Card {...card} />)}
    {props.game.status !== 'OFF' && (
      <img
        className="card br2"
        src={`https://via.placeholder.com/100/138?text=${props.game.player}`}
      />
    )}
  </div>
)

const connector = connect(pick(['player', 'game']))

export default connector(Player)
