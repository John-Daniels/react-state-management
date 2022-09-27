import React, { useState, useContext } from "react"
import "./App.scss"
import { todoContext } from "./todoContext"

const App = () => {
  const [todos, setTodos] = useContext(todoContext)
  console.log(todos)
  const [form, setForm] = useState({ text: "", completed: false })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const submit = (e) => {
    e.preventDefault()

    setTodos((prevTodos) => [...prevTodos, form])
  }

  return (
    <div className='app app__flex'>
      <h1>Todo List</h1>
      <form onSubmit={submit} className='app__flex'>
        <input
          className='my-input'
          name='text'
          onChange={onChange}
          value={form.text}
        />
        <button>add</button>
      </form>

      <div className=''>
        {todos.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

const TodoItem = ({ item: { text, completed } }) => (
  <div className='todo-item app__flex'>
    <h2>{text}</h2>
    <div className={`icon ${completed ? "completed" : "incompleted"}`} />
  </div>
)

export default App
