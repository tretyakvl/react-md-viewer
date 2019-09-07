import React, { Component } from 'react'
import marked from 'marked'
import './App.css'

class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      source: '',
      parsed: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (event) {
    this.setState({
      source: event.target.value,
      parsed: marked.parse(event.target.value)
    })
  }

  render () {
    return (
      <div>
        <textarea name='editor' id='editor' onChange={this.changeHandler} value={this.state.source} />
        <div className='preview'>
          {this.state.parsed}
        </div>
      </div>
    )
  }
}

export default App
