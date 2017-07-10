import React from 'react'
import ReactDOM from 'react-dom'

import hats from '../public/data/hats'

class App extends React.Component {
  constructor (props) {
    super(props),
    this.state = {
      hat: '',
      count: 0
     }
  }

  componentWillMount () {
    this.randomHat()
  }

  upCount () {
    this.setState((prevState) => {
      return {count: prevState.count + 1}
      })
  }

  randomHat () {
    hats.map((hat) => {
      if (hat.hat == this.state.hat) {
        hat.count = this.state.count
      }
    })
    var randomNum = Math.floor(Math.random() * hats.length)
    this.setState(() => {
      return {
        hat: hats[randomNum].hat,
        count: hats[randomNum].count
      }
    })
  }

  render() {
    return (
      <div>
        <h1>My hat is a {this.state.hat} hat. I've worn it {this.state.count} times</h1>
        <button onClick={() => this.upCount()}>Wear hat</button>
        <button onClick={() => this.randomHat()}>Change hat</button>
      </div>

    )
  }

}

function test (props) {
  {console.log('test', props)}
  return (
    <h1>This is a test.</h1>
  )
}

var renderPoint = document.getElementById('app')

ReactDOM.render(<App />, renderPoint)
