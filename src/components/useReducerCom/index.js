import React, { Fragment, useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import Todo from "./todo";

export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(state, action) {
  switch (action.type){
    case ACTIONS.INCREMENT: 
      return {count: state.count + 1}
    case ACTIONS.DECREMENT: 
      return {count: state.count - 1}
    default: 
    return state
  }
}
function reducer1(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

const newTodo = (name) => {
 return {id: Date.now(), name, complete: false}
}

const UseReducerCom = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [todos, dispatch2] = useReducer(reducer1,[] )
  const [name, setName] = useState('')

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT});
  };
  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch2({type: ACTIONS.ADD_TODO, payload: {name}})
    setName('')
  }
  return (
    <Fragment>
      <Button onClick={decrement}>-</Button>
      <span> {state.count} </span>
      <Button onClick={increment}>+</Button>

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch2} />
      })}
    </Fragment>
  );
};

export default UseReducerCom;
