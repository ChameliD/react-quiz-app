import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
        <div>
             <div>This is the home page</div>
             <a href='/employeeList'>Emplyee</a>
             <br/>
             <a href='quiz-home'>Quiz</a>
        </div>
    )
  }
}

export default Home