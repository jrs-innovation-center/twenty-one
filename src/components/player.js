import React from 'react'
import Card from './card'
import Placeholder from './placeholder'
import { map, not, equals } from 'ramda'

const Player = ({ player, game }) => {
  const showCard = card => <Card {...card} />
  return (
    <div>
      {map(showCard, player)}
      {not(equals('OFF', game.status)) && <Placeholder score={game.player} />}
    </div>
  )
}

export default Player
