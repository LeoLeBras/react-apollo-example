/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-apollo'
import gql from 'graphql-tag';

const mapQueriesToProps = () => ({
  wines: {
    query: gql`
      query getWine($wineId: Int!) {
        wine(id: $wineId) {
          name
          price
          color
        }
      }
    `,
    variables: {
      wineId: 1,
    },
  },
})

export default (container: React$Element): React$Element => (
  compose(
    connect({
      mapQueriesToProps,
    })
  )(container)
)
