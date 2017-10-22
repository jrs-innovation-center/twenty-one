import React from 'react'
import Card from './card'
import Placeholder from './placeholder'
import Back from './back'

const Dealer = props => {
  return (
    <div>
      {props.game.status === 'ON'
        ? [<Card {...props.dealer[0]} />, <Back />]
        : props.dealer.map(card => <Card {...card} />)}

      {['OFF', 'ON'].indexOf(props.game.status) === -1 && (
        <Placeholder score={props.game.dealer} />
      )}
    </div>
  )
}

export default Dealer
