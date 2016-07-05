/* @flow */

import React from 'react'
import { IndexRoute, Route } from 'react-router'
import DefaultLayout from '@layouts/DefaultLayout'
import FeedScene from '@Feed/scenes/FeedScene'
import WineScene from '@Wine/scenes/WineScene'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute component={FeedScene} />
    <Route path="wine/:wineId" component={WineScene} />
  </Route>
)
