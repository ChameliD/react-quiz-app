import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div><a href='/'>Online learner Hub</a></div>
          </nav>
        </header>
      </div>
    )
  }
}
export default Header