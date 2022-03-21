import { useContext } from 'react';
import { Context } from '../App';
function TodoFooter({onClearCompleted}) {
    const {state,handleOnClearCompleted} = useContext(Context);
    const completedCount = state.filter((todo)=>todo.isCompleted).length;
    
    return ( 
        <div className="todoFooter">
            <span>{completedCount}/{state.length} completed</span>
            <button onClick = {handleOnClearCompleted}>clear completed</button>
        </div>
     );
}

export default TodoFooter;