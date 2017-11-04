import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { createStore } from 'redux'
import { counter, addGun, reduceGun } from './index.redux'

const store = createStore(counter)

function render() {
  ReactDom.render(
    <App store={store} addGun={addGun} reduceGun={reduceGun}></App>,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)
