import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor (props) {
    super(props),
    this.state = { hat: 'bowler' }
  }

  render() {
    return (
      <div>My hat is a {this.state.hat}</div>
    )
  }

}

function test (props) {
  return (
    <h1>This is a test</h1>
  )
}

var renderPoint = document.getElementById('app')

ReactDOM.render(<App />, renderPoint)
