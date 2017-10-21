import React from 'react'
import Controls from '../components/controls'
import Player from '../components/player'
import Dealer from '../components/dealer'
import Scoreboard from '../components/scoreboard'

export default () => (
  <div className="vh-100 w-100 bg-green flex flex-column pa4">
    <div className="flex justify-between items-center">
      <h1 className="avenir">Twenty One</h1>
    </div>
    <Player />
    <Dealer />
    <Scoreboard />
    <Controls />
  </div>
)
