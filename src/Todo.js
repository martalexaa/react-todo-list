import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div className="todos" >
      <label className='todo'>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} maxLength={15} />
        {todo.name}
      </label>
    </div>
  )
}
