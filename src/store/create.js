/* @flow */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import * as reducers from './modules'

export default function(client: any): Function {
  const enhancer = compose(
    client.middleware()
  )
  return createStore(
    combineReducers({
      ...reducers,
      apollo: client.reducer(),
    }),
    applyMiddleware(enhancer)
  )
}
