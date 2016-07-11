/* @flow */

export type State = {
  state: 'read' | 'update',
}

export type Props = {
  params: {
    wineId: number,
  },
  data: {
    refetch: () => void,
    loading: boolean,
    wines: Array<Wine>,
  },
}
