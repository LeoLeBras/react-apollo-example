/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-apollo'
import { withRouter } from 'react-router'
import gql from 'graphql-tag';

const mapQueriesToProps = ({ ownProps }) => ({
  data: {
    query: gql`
      query getWine($id: Int!) {
        wines(id: $id) {
          id,
          name
        }
      }
    `,
    variables: {
      id: ownProps.params.wineId,
    },
    forceFetch: false,
  },
})

export default (container: React$Element): React$Element => (
  compose(
    connect({
      mapQueriesToProps,
    }),
    withRouter
  )(container)
)
