import React from 'react'

const Scoreboard = props => {
  return (
    <div className="flex justify-center">
      <span className="pl4 tracked ttu">Status: {props.game.status}</span>
      <span className="pl4 tracked ttu">Wins: {props.game.wins}</span>
    </div>
  )
}

export default Scoreboard
