/* @flow */

const apolloCacheMiddleware = (store) => (
  (next) => (action) => next(action)
)

export default apolloCacheMiddleware
