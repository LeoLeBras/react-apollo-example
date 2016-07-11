/* @flow */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import DevTools from '@utils/DevTools'
import apolloCacheMiddleware from './middlewares/apolloCacheMiddleware'
import * as reducers from './modules'

export default function(client: any): Function {
  const enhancer = compose(
    applyMiddleware(
      client.middleware(),
      apolloCacheMiddleware
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
