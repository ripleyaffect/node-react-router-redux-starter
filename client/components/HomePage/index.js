import React from 'react'
import { connect } from 'react-redux'

import { decrement, increment } from 'app/actions'

const DecrementButton = ({ dispatchDecrement }) => {
  return <button onClick={dispatchDecrement}>Decrement</button>
}
const ConnectedDecrementButton = connect(
  state => state,
  { dispatchDecrement: decrement }
)(DecrementButton)

const IncrementButton = ({ dispatchIncrement }) => {
  return <button onClick={dispatchIncrement}>Increment</button>
}
const ConnectedIncrementButton = connect(
  state => state,
  { dispatchIncrement: increment }
)(IncrementButton)

const HomePage = ({ value }) => {
  return <div className="page home-page">
    <h1>Home</h1>
    <h2>{value}</h2>
    <ConnectedIncrementButton />
    <ConnectedDecrementButton />
  </div>
}

export default connect(state => state)(HomePage)
