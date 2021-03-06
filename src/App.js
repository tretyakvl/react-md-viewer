import React, { Component } from 'react'
import Marked from 'marked'
import { sanitize } from 'dompurify'
import placeholder from './placeholder'
import './App.css'

const renderer = new Marked.Renderer()
renderer.link = (href, title, string) => {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${string}</a>`
}

Marked.setOptions({
  sanitizer: sanitize,
  gfm: true,
  breaks: true,
  headerIds: false,
  renderer: renderer
})

class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      source: placeholder
    }
    this.App = React.createRef()
    this.changeHandler = this.changeHandler.bind(this)
    this.previewToggle = this.previewToggle.bind(this)
  }

  componentDidUpdate () {
    window.Prism.highlightAll()
  }

  changeHandler (event) {
    this.setState({
      source: event.target.value
    })
  }

  previewToggle (event) {
    const PREVIEW_CLASS = 'App--detailed'
    const BREAKPONT = 1100
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    if (vw < BREAKPONT) {
      if (event.currentTarget.matches('.App__preview')) {
        this.App.current.classList.add(PREVIEW_CLASS)
      } else {
        this.App.current.classList.remove(PREVIEW_CLASS)
      }
    }
  }

  render () {
    return (
      <div className='App' ref={this.App}>
        <div className='App__editor' onClick={this.previewToggle}>
          <textarea name='editor' id='editor' onChange={this.changeHandler} value={this.state.source} />
        </div>
        <div
          className='App__preview'
          id='preview'
          onClick={this.previewToggle}
          dangerouslySetInnerHTML={{ __html: Marked.parse(this.state.source) }}
        />
      </div>
    )
  }
}

export default App
