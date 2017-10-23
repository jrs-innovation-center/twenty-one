import React from 'react'
import Card from './card'
import Placeholder from './placeholder'
import Back from './back'
import { equals, map, contains, not, head } from 'ramda'

const Dealer = ({ dealer, game }) => {
  const showCard = card => <Card {...card} />
  const gameOver = not(contains(game.status, ['ON', 'OFF']))
  const isPlaying = equals('ON', game.status)
  return (
    <div>
      {isPlaying
        ? [<Card {...head(dealer)} />, <Back />]
        : map(showCard, dealer)}

      {gameOver && <Placeholder score={game.dealer} />}
    </div>
  )
}

export default Dealer
