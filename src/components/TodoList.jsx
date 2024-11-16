import React from 'react'
import TodoCart from './TodoCart';

const TodoList = (props) => {
  const {todos} = props
  return (
    <ul className='main'>
      {todos.map((todo,todoIndex) => {
        return(
          <TodoCart {...props} key = {todoIndex} ndex={todoIndex}>
            <p>{todo}</p>
          </TodoCart>
        )
    })}</ul>
  );
}

export default TodoList;