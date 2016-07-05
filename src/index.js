/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { Router, browserHistory } from 'react-router'
import { NETWORK_INTERFACE } from '@config'
import createStore from '@store/create'
import DevTools from '@utils/DevTools'
import routes from './routes'

const networkInterface = createNetworkInterface(NETWORK_INTERFACE)
const client = new ApolloClient({ networkInterface })

const App = (): React$Element => (
  <ApolloProvider store={createStore(client)} client={client}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.querySelector('.app'));
