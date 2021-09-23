import React from "react";
import { ContextProvider } from "./context";
import AddTodoItem from "./components/AddTodoItem";
import TodoItems from "./components/TodoItems";
import TodoItemsManipulation from "./components/TodoItemsManipulation";

function App() {
  return (
    <ContextProvider>
      <main className="todo">
        <h1 className="title">TODO</h1>
        <AddTodoItem />
        <TodoItems />
        <TodoItemsManipulation />
      </main>
    </ContextProvider>
  );
}

export default App;
