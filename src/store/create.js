/* @flow */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import DevTools from '@utils/DevTools'
import * as reducers from './modules'

export default function(client: any): Function {
  const enhancer = compose(
    DevTools.instrument(),
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
