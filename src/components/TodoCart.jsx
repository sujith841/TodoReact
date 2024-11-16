import React from 'react'

const TodoCart = (props) => {
  const {children,handleDelete,ndex,handleEdit} = props 
  return (
    <li className='todoItem' >
      {children}
      <div className='actionsContainer'>
      <button onClick={(Index)=>{
          handleDelete(ndex)
        }}>
        <i className="fa-solid fa-trash"></i>
        </button>
        <button onClick={(Index)=>{
          handleEdit(ndex)
        }}>
        <i className="fa-regular fa-pen-to-square"></i>
        </button>
        
        </div>
      </li>
  )
}

export default TodoCart