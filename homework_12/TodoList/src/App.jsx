import { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";
import { createContext } from "react";
import "./App.css";


export const Context = createContext([]);

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          isCompleted: false,
        },
      ];
    }
    case "delete": {
      return state.filter((t) => t.id !== action.payload.id);
    }
    case "clear-completed": {
      return state.filter((todo) => !todo.isCompleted);
    }
    case "change": {
      return state.map((todo) => {
        if (todo.id === action.payload.updatedTodo.id) {
          return action.payload.updatedTodo;
        }
        return todo;
      });
    }
    default:
      return [];
  }
}
function App() {
  
  const [state, dispatch] = useReducer(reducer, []);

  const handleOnAdd = (text) => {
    dispatch({
      type: "add",
      payload: {
        text: text,
      },
    });
  };

  const handleOnChange = (newTodo) => {
    dispatch({
      type: "change",
      payload: {
        updatedTodo: newTodo,
      },
    });
  };
  const handleOnDelete = (todo) => {
    dispatch({ type: "delete", payload: { id: todo.id } });
  };

  const handleOnClearCompleted = () => {
    dispatch({
      type: "clear-completed",
    });
    //setTodos(todos.filter((item)=> !item.isCompleted));
  };
  return (
    <Context.Provider value={{state,handleOnChange,handleOnDelete,handleOnClearCompleted,handleOnAdd}}>
      <div className="container">
      <TodoForm onAdd={handleOnAdd} />
      <TodoList/>
      <TodoFooter />
    </div>
    </Context.Provider>
  );
}

export default App;
