export default reducer

function reducer (state = { issues: [] }, action = {}) {
  switch (action.type) {
    case 'ADD_ISSUES':
      return { ...state, issues: [].concat(state.issues).concat(action.payload) }
    default:
      throw new Error('you did not provide a valid action type')
  }
}
