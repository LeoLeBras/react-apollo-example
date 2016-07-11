/* @flow */

import { NETWORK_INTERFACE } from '@config'
import ApolloClient, { createNetworkInterface } from 'apollo-client';

const createApolloClient = (): any => {
  const networkInterface = createNetworkInterface(NETWORK_INTERFACE)
  return new ApolloClient({
    networkInterface,
  })
}

export default createApolloClient
