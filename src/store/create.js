/* @flow */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import DevTools from '@utils/DevTools'
import { cacheMiddleware } from './middlewares'
import * as reducers from './modules'

export default function(client: any): Function {
  const enhancer = compose(
    applyMiddleware(
      client.middleware(),
      cacheMiddleware
    ),
    DevTools.instrument()
  )
  return createStore(
    combineReducers({
      ...reducers,
      apollo: client.reducer(),
    }),
    enhancer
  )
}
