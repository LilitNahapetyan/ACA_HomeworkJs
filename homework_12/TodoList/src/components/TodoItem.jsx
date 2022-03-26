import { useContext } from 'react';
import { Context } from '../App';

function TodoItem({ item }) {
  const {handleOnChange,handleOnDelete} = useContext(Context);
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => {
          handleOnChange({
            ...item,
            isCompleted: !item.isCompleted,
          });
        }}
      />
      {item.text}
      <button
      className="deleteButton"
        onClick={() => {
          handleOnDelete(item);
        }}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
