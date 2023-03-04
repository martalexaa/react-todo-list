import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import './App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(prevTodos => [...prevTodos, ...storedTodos])
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    todoNameRef.current.value = '';
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleClearAllTodos() {
    setTodos([])
  }

  return (
    <>
      <Container className='container'>
        <Col>
          <Row className="title" ><h1>My Favorite Todo App</h1></Row>
          <div className='instructions' >
            <p>Type your todos one by one and add them by clicking the 'Add' button.</p>
            <p>If a task is done, click on the checkbox and hit the 'Clear' button.</p>
          </div>
          <Row>
            <Form>
              <Form.Control
                required
                ref={todoNameRef}
                type="text"
                title='Type here max. 10 characters'
                className='input'
                placeholder='Type here...'
                maxLength={10}
                onKeyDown={handleKeyDown}
              />
            </Form>
          </Row>
          <Row>
            <Button onClick={handleAddTodo} className='btn'>Add Item</Button>
            <Button onClick={handleClearTodos} className='btn'>Clear Selected</Button>
            <Button onClick={handleClearAllTodos} className='btn'>Clear All</Button>
          </Row>
          <div className='left-todos' >{todos.filter(todo => !todo.complete).length} todos left</div>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <Row className='footer' />
        </Col>
      </Container>
    </>
  )
}

export default App;
