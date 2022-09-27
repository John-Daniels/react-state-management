import { createContext, useState } from "react"
export const todoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      text: "finish up flutter",
      completed: false,
    },
  ])

  return (
    <todoContext.Provider value={[todos, setTodos]}>
      {children}
    </todoContext.Provider>
  )
}
