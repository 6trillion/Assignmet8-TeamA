import React,{useState} from 'react';
import {useTodosDispatch, useTodosState, Todo} from '../contexts/Todo/Store';


interface ListProps {
  todo : Todo;
}
function TodoItem( {todo} : ListProps) {
  const [newTodo, setNewTodo] = useState(todo);
  const dispatch = useTodosDispatch();
  const _onClickDelete = (e:any) => {
    dispatch({
      type: 'REMOVE',
      id : todo.id
    });
  }
  const _onClickUpdate = (e:any) => {
    setNewTodo({...newTodo, taskName: '새로운Todo', writer: '새로운write'});
    console.log(newTodo);
    dispatch({
      type: 'UPDATE',
      updateTodo : newTodo
    });
  }
  return (
      <div>
        <div>{todo.id}{todo.taskName}{todo.writer}</div>
      <button onClick={_onClickDelete}>delete</button>
      <button onClick={_onClickUpdate}>update</button>
      </div>
      
  );
}

function TodoList() {
  const todos = useTodosState();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;