import React from 'react'
class App extends React.Component{
  constructor(props) {
    super(props)
    this.store = this.props.store
    this.addGun = this.props.addGun
    this.reduceGun = this.props.reduceGun
  }
  render() {
    const num = this.store.getState()
    return (
      <div>
        <h1>{ num }</h1>
        <button onClick={() => this.store.dispatch(this.addGun())}>+</button>
        <button onClick={() => this.store.dispatch(this.reduceGun())}>-</button>        
      </div>
    )
  }
}

export default App
