import React from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState,useEffect } from 'react';

function App() {
  const [todos,setTodos] = useState([]);
  const [todoValue,setTodoValue] = useState('');
  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  const handleInput = (newtodo)=>{
    const newTodoList =[...todos,newtodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleDelete = (index) =>{
    const newDeleteTodos = todos.filter((todo,todoIndex) => {
      return todoIndex!=index
    })
    setTodos(newDeleteTodos)
    persistData(newDeleteTodos)
  }

  const handleEdit = (index) =>{
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit)
    handleDelete(index)
  }
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <>
      <TodoInput handleInput ={handleInput} setTodoValue={setTodoValue} todoValue={todoValue}/>
      <TodoList handleEdit ={handleEdit} handleDelete ={handleDelete} todos = {todos}/>
    </>
  )
}

export default App;
