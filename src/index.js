import React from "react"
import ReactDOM from "react-dom/client"
import { TodoProvider } from "./todoContext"

import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
