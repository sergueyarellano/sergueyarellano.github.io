import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime'
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
