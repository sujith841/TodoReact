import React,{useState} from 'react'

const TodoInput = (props) => {
  const {handleInput,todoValue,setTodoValue} = props;
  return (
    <header>
      <input value = {todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)}} placeholder="Hello can you type here"/>
      <button onClick={()=>{
        handleInput (todoValue);
        setTodoValue(' ')
      }}>Add me</button>
    </header>
  )
}

export default TodoInput;