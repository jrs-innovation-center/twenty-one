import React from 'react'
import {
  ControlsContainer,
  ScoreboardContainer,
  DealersHand,
  PlayersHand,
  HeaderContainer
} from '../containers'

import Header from '../components/header'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <HeaderContainer />
    <PlayersHand />
    <DealersHand />
    <ScoreboardContainer />
    <ControlsContainer />
  </Layout>
)
