import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos]= useState([{  }])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] )
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) //save to local storage
  }, [todos])

  //toggle between complete and incomplete
function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
}

function handleClearTodos() {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text"></input>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Completed Todo</button>
    <div>{todos.filter(todo => !todo.complete).length } left Todo</div>
    </>
  )
}

export default App;
