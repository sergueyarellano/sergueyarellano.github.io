import React from 'react'
import './style.css'

const App = () => (
  <>
    <header>
      <img style={{ gridArea: 'logo' }} src='myimage.jpg' loading='lazy' />
      <h1 style={{ gridArea: 'title' }}>Polar EST +1</h1>
      <nav style={{ gridArea: 'nav' }}>
        <ul>
          <li><a href='/home'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/posts'>Posts</a></li>
        </ul>
      </nav>
    </header>
    <main> my main content</main>
    <footer> my footer</footer>
  </>
)

export default App
