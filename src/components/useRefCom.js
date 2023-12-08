import React, { Fragment, useEffect, useRef, useState } from "react";

const UseRefCom = () => {
  const [name, setName] = useState('');
  const inputRef = useRef()
  const preName = useRef('')

  useEffect(() => {
    // 获取之前的值
    preName.current = name
  }, [name])

  // render times 
  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  // input操作
  const focus = () => {
    inputRef.current.focus()
    inputRef.current.value = "some vlaue"
  }
  return (
    <Fragment>
      <input ref={inputRef} value={name} onChange={(e) => {setName(e.target.value)}} />
      <div>My name is {name} and it used to be {preName.current}</div>
      <button onClick={focus}>Focus</button>
      <div>I rendered {renderCount.current} times</div>
    </Fragment>
  );
};

export default UseRefCom;
