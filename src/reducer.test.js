import { describe, Try } from 'riteway'
import reducer from './reducer'

describe('reducer()', async assert => {
  assert({
    given: 'no arguments',
    should: 'throw',
    actual: Try(reducer).toString(),
    expected: 'Error: you did not provide a valid action type'
  })
  assert({
    given: 'action ADD_ISSUES',
    should: 'return updated state with issues',
    actual: reducer(undefined, { type: 'ADD_ISSUES', payload: [{}] }),
    expected: { issues: [{}] }
  })
})
