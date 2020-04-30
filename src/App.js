import React, { useReducer, useEffect } from 'react'
import reducer from './reducer'
import { fetchIssues } from './App.effects'
import './style.css'
import Star from './Star'

const App = () => {
  const [store, redux] = useReducer(reducer, { issues: [] })

  useEffect(fetchIssues(redux), [])
  return (
    <>
      <header>
        <Star />
        <h1 style={{ gridArea: 'title' }}>Polar EST +1</h1>
        <nav style={{ gridArea: 'nav' }}>
          <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/posts'>Posts</a></li>
          </ul>
        </nav>
      </header>
      <main>Main content</main>
      <footer> my footer</footer>
    </>
  )
}
export default App
