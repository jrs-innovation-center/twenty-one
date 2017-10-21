import React from 'react'
import { connect } from 'react-redux'
import { pick } from 'ramda'

const Scoreboard = props => {
  return (
    <div>
      <span className="pl4">Status: {props.game.status}</span>
      <span className="pl4">Wins: {props.game.wins}</span>
    </div>
  )
}

const connector = connect(pick(['game']))
export default connector(Scoreboard)
