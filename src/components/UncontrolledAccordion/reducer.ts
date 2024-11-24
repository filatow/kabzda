export const Action = {
  TOGGLE_COLLAPSED: 'TOGGLE-COLLAPSED'
}

export type StateType = {
  collapsed: boolean
}

export type ActionType = {
  type: string
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case Action.TOGGLE_COLLAPSED:
      return {...state, collapsed: !state.collapsed}
    default:
      throw new Error('Invalid action type')
  }
}