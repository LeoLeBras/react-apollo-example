/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'
import createStore from '@store/create'
import createApolloClient from '@helpers/apollo'
import DevTools from '@utils/DevTools'
import routes from './routing'

const client = createApolloClient()

const App = (): React$Element<any> => (
  <ApolloProvider store={createStore(client)} client={client}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.querySelector('.app'));
