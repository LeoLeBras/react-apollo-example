/* @flow */

import { Record } from 'immutable'

const User = new Record({
  id: null,
  name: undefined,
  email: undefined,
})

const initialState = new User()

type Action = any

export default function user(state: User, action: Action) {
  return state
}
