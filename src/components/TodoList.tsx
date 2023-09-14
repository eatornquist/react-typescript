import React from 'react'
import '../TodoList.css'

// function TodoList() {
//   return <ul></ul>
// }

interface TodoListProps {
  items: { id: string; text: string }[]
  onDeleteTodo: (id: string) => void
}

//similar declaration of the one above
const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text} </span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
