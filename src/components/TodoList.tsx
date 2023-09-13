import React from 'react'

// function TodoList() {
//   return <ul></ul>
// }

interface TodoListProps {
  items: { id: string; text: string }[]
}

//similar declaration of the one above
const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

export default TodoList
