import React, {Fragment, useState} from "react"
import { Button } from "react-bootstrap"

const UseStateCom = () => {
  const [state, setState] = useState({count: 0})
  const count = state.count
  return (
    <Fragment>
      <Button onClick={() => setState(preState => {return {...preState, count: preState.count - 1}} )}>-</Button>
      <span> {count} </span>
      <Button onClick={() => setState(preState => {return {...preState, count: preState.count + 1}} )}>+</Button>
    </Fragment>
  )
}

export default UseStateCom;