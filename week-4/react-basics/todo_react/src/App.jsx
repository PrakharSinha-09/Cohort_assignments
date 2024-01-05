import { useState } from 'react'

import './App.css'

function App() {

  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const[todos,setTodos]=useState([])

  function addTodo() {
    // Create a new todo object
    const newTodo = {
      id: Math.random().toString(36).substring(7),
      title: title,
      description:description,
      completed: false,
    };

    // Add the new todo to the todos state
    setTodos([...todos, newTodo]);
    setTitle("")
    setDescription("")
  }

  function deleteTodo(todoId){
    const newTodos=todos.filter((todo)=>{
      return todo.id!=todoId
    })
    setTodos([...newTodos])
  }

  // if(todos.length==0) return null
  return (
    <div>
      <input type="text" value={title} placeholder='enter title' onChange={(e)=>{setTitle(e.target.value)}}/> <br />
      <input type="text" value={description} placeholder='enter description' onChange={(e)=>{setDescription(e.target.value)}}/> <br />

      <button onClick={addTodo}>Add Todo</button>

      <h1>Todos</h1>
      
        {todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button onClick={() => deleteTodo(todo.id)}>Mark Complete & Delete!</button>
          </div>
        ))}
      
    </div>
  )
}

export default App
