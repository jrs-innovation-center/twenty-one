import React from 'react'
import Card from './card'
import Placeholder from './placeholder'

const Player = props => (
  <div>
    {props.player.map(card => <Card {...card} />)}
    {props.game.status !== 'OFF' && <Placeholder score={props.game.player} />}
  </div>
)

export default Player
