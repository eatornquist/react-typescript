import React, { useRef } from 'react'

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const enteredText = textInputRef.current!.value //This ! is a way of saying "I know what I'm doing. This object is not going to be null here"
    console.log(enteredText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  )
}

export default NewTodo