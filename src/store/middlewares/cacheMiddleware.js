/* @flow */

// import localforage from 'localforage'

export default function cacheMiddleware() {
  return (next: Function) => (action: Object): Promise<Object> => {
    return next(action)
  }
}
