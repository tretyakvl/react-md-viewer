import React, { Component } from 'react'
import Marked from 'marked'
import { sanitize } from 'dompurify'
import placeholder from './placeholder'
import './App.css'

Marked.setOptions({
  sanitizer: sanitize,
  gfm: true,
  breaks: true,
  headerIds: false
})

class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      source: placeholder
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (event) {
    this.setState({
      source: event.target.value
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App__editor'>
          <textarea name='editor' id='editor' onChange={this.changeHandler} value={this.state.source} />
        </div>
        <div className='preview' dangerouslySetInnerHTML={{ __html: Marked.parse(this.state.source) }} />
      </div>
    )
  }
}

export default App
