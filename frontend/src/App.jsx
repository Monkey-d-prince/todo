import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todos } from './components/Todos'
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  fetch('http://localhost:3000/todos')
    .then(async function(res) {
      const data = await res.json()
      if (res.status === 200) {
        setTodos(data.data)
      }
    })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
