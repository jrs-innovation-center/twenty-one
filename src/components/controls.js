import React from 'react'
import Button from './button'

const Controls = props => (
  <div className="flex items-center justify-center mt4">
    <Button onClick={props.game.status === 'ON' && props.hit}>Hit</Button>
    <Button onClick={props.game.status === 'ON' && props.stay}>Stay</Button>
    <Button onClick={props.reset}>
      {props.game.status === 'OFF' ? 'Start' : 'Reset'}
    </Button>
  </div>
)

export default Controls
