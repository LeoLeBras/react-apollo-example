/* @flow */

import { createFragment } from 'apollo-client'
import gql from 'graphql-tag'

export const wineFragment = createFragment(gql`
  fragment wine on Wine {
    name
    price
    flavors
    bio
    color
  }
`)
