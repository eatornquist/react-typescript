import React from 'react'
import TodoList from './components/TodoList'

function App() {
  const todos = [
    { id: 't1', text: 'Finish the course' },
    { id: 't2', text: 'Find a job' },
  ]

  return (
    <>
      <div className="App">
        <TodoList items={todos} />
      </div>
    </>
  )
}

export default App
