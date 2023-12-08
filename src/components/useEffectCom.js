import React, { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const UseEffectCom = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // clean up
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [resourceType, setResourceType] = useState('posts')
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType])
  return (
    <Fragment>
      <div>
        {windowWidth}
        <Button onClick={() => {setResourceType('posts')}}>Posts</Button>
        <Button onClick={() => {setResourceType('users')}}>Users</Button>
        <Button onClick={() => {setResourceType('comments')}}>Comments</Button>
      </div>
      <h1>{resourceType}</h1>
      {/* {items.map((item) => <pre>{JSON.stringify(item)}</pre>)} */}
    </Fragment>
  );
};

export default UseEffectCom;
