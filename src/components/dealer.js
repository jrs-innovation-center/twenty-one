import React from 'react'
import Card from './card'
import { connect } from 'react-redux'
import { pick } from 'ramda'

const back =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Card_back_02.svg/1000px-Card_back_02.svg.png'

const Dealer = props => {
  return (
    <div>
      {props.game.status === 'ON'
        ? [
            <Card {...props.dealer[0]} />,
            <img key={1} className="card" src={back} />
          ]
        : props.dealer.map(card => <Card {...card} />)}

      {['OFF', 'ON'].indexOf(props.game.status) === -1 && (
        <img
          class="card br2"
          src={`https://via.placeholder.com/100/138?text=${props.game.dealer}`}
        />
      )}
    </div>
  )
}

const connector = connect(pick(['dealer', 'game']))
export default connector(Dealer)
