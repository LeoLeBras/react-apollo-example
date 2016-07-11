/* @flow */

import { Component } from 'react'
import { compose } from 'recompose'
import { readQueryFromStore } from 'apollo-client'
import { connect } from 'react-apollo'
import { withRouter } from 'react-router'
import gql from 'graphql-tag'
import { wineFragment } from '@store/modules/wines'
import type { State, Props } from './types'

const mapQueriesToProps = ({ ownProps }) => {
  const { wineId } = ownProps.params
  return {
    data: {
      query: gql`
        query getWine($id: Int!) {
          wines(id: $id) {
            id
            ...wine
          }
        }
      `,
      variables: {
        id: wineId,
      },
      fragments: wineFragment,
    },
  }
}

const mapMutationsToProps = () => {}

export default function(
  container: React$Component<any, Props, State>
): () => React$Component<any, Props, State> {
  return compose(
    connect({
      mapQueriesToProps,
      mapMutationsToProps,
    }),
    withRouter
  )(container)
}
