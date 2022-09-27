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

    if (form.text.length < 3) return
    setTodos((prevTodos) => [...prevTodos, form])
  }

  const markComplete = (text) => {
    const index = todos.findIndex((todo) => todo.text == text)

    todos[index].completed = true

    setTodos((prevTodos) => [...todos])
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
      <div className='app__flex'>
        <div className='app__flex'>
          <div className='status-bar completed' /> <small>completed</small>
        </div>
        <div className='app__flex'>
          <div className='status-bar incompleted' /> <small>incompleted</small>
        </div>
      </div>

      <div className='todos'>
        {todos.map((item, index) => (
          <TodoItem item={item} key={index} onMarkComplete={markComplete} />
        ))}
      </div>
    </div>
  )
}

const TodoItem = ({ item: { text, completed }, onMarkComplete }) => (
  <div className='todo-item app__flex'>
    <div className={`icon ${completed ? "completed" : "incompleted"}`} />
    <h2>{text}</h2>
    {!completed && (
      <small onClick={() => onMarkComplete(text)}>mark as completed</small>
    )}
  </div>
)

export default App
