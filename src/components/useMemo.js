import React, {Fragment, useState, useMemo, useEffect} from "react"
import { Button } from "react-bootstrap"

const UseMemoCom = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // 当且仅当number变化才执行slowFunction， change themed function则不再执行slowFunction
  const doubledNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  // number变化和change theme function都会执行slowFunction
  // const doubledNumber = slowFunction(number)
  const themeStyles = useMemo(() => {return {
    backgroundColor: dark? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }}, [dark])
  useEffect(() => {
    console.log('Theme changed')
  }, [themeStyles])

  return (
    <Fragment>
      <input type="number" value={number} onChange={(e) => {
        setNumber(parseInt(e.target.value))
      }} />
      <Button onClick={() => setDark(preDark => !preDark)}>Change themed</Button>
      <div style={themeStyles}>{doubledNumber}</div>
    </Fragment>
  )

  function slowFunction(num) {
    console.log('calling slow Function')
    for(let i = 0; i < 1000000000; i++) {}
    return num * 2
  }
}

export default UseMemoCom;