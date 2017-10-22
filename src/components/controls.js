import React from 'react'
import Button from './button'

const Controls = props => (
  <div className="flex items-center justify-center mt4">
    {props.game.status !== 'ON' ? (
      <Button onClick={props.newgame}>New Game</Button>
    ) : (
      [
        <Button onClick={props.game.status === 'ON' && props.hit}>Hit</Button>,
        <Button onClick={props.game.status === 'ON' && props.stay}>Stay</Button>
      ]
    )}
  </div>
)

export default Controls
