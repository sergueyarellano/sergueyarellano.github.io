const fetchIssues = (redux) => () => {
  fetch('https://api.github.com/repos/sergueyarellano/sergueyarellano.github.io/issues')
    .then(response => response.json())
    .then(data => redux({ type: 'ADD_ISSUES', payload: data }))
}

export {
  fetchIssues
}
