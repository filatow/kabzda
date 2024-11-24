import {Action, reducer, StateType} from './reducer';

test('reducer should be true', () => {
  // data
  const state: StateType = {
    collapsed: false
  }
  // action
  const newState = reducer(state, {type: Action.TOGGLE_COLLAPSED})
  // expectation
  expect(newState.collapsed).toBe(true)
})

test('reducer should be false', () => {
  // data
  const state: StateType = {
    collapsed: true
  }
  // action
  const newState = reducer(state, {type: Action.TOGGLE_COLLAPSED})
  // expectation
  expect(newState.collapsed).toBe(false)
})

test('reducer throw an error because action type is incorrect', () => {
  // data
  const state: StateType = {
    collapsed: true
  }
  // action
  expect(() => {
    reducer(state, {type: 'FAKE-TYPE'})
  }).toThrowError()
})