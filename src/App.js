import React, { Component } from 'react'
import Marked from 'marked'
import { sanitize } from 'dompurify'
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
      source: '',
      parsed: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (event) {
    this.setState({
      source: event.target.value,
      parsed: Marked.parse(event.target.value)
    })
  }

  render () {
    return (
      <div>
        <textarea name='editor' id='editor' onChange={this.changeHandler} value={this.state.source} />
        <div className='preview' dangerouslySetInnerHTML={{ __html: this.state.parsed }} />
      </div>
    )
  }
}

export default App
