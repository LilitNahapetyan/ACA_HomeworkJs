import TodoItem from "./TodoItem";
import { useContext } from 'react';
import { Context } from '../App';

function TodoList() {
  const {state} = useContext(Context);
  return (
    <div className="todoList">
      {state.map((item) => {
        return <TodoItem key={item.id} item={item}/>;
      })}
    </div>
  );
}

export default TodoList;
