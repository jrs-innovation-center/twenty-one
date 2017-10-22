import React from 'react'
import {
  ControlsContainer,
  ScoreboardContainer,
  DealersHand,
  PlayersHand
} from '../containers'

import Header from '../components/header'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Header />
    <PlayersHand />
    <DealersHand />
    <ScoreboardContainer />
    <ControlsContainer />
  </Layout>
)
