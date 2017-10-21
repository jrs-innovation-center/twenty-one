import React from 'react'
import { connect } from 'react-redux'
import { Button } from 't63'
import { identity } from 'ramda'
import { hit, stay, reset } from '../action-creators'

const Controls = props => {
  return (
    <div className="flex items-center justify-between mt4">
      <Button
        className="bg-green bb--green mh3"
        disabled={props.game.status !== 'ON'}
        onClick={props.hit}
      >
        Hit
      </Button>
      <Button
        className="bg-green bb--green mh3"
        disabled={props.game.status !== 'ON'}
        onClick={props.stay}
      >
        Stay
      </Button>
      <Button className="bg-green bb--green mh4" onClick={props.reset}>
        {props.game.status === 'OFF' ? 'Start' : 'Reset'}
      </Button>
    </div>
  )
}

const connector = connect(identity, mapActionsToProps)

export default connector(Controls)

function mapActionsToProps(dispatch) {
  return {
    hit: e => dispatch(hit),
    stay: e => dispatch(stay),
    reset: e => dispatch(reset)
  }
}
