import React, { useState } from 'react';
import Login from 'component/common/Login';
import ToDoCreate from 'component/common/ToDoCreate';
import { useTodo } from 'utils/todoService';
import ToDoList from 'component/todoList/ToDoList';

const App = () => {
  const { todoState, nextIdState, increamentNextId, removeTodo, createTodo } =
    useTodo();
  const [userName, setUserName] = useState('');
  return (
    <div>
      <Login userName={userName} setUserName={setUserName} />
      <ToDoCreate
        userName={userName}
        nextId={nextIdState}
        createTodo={createTodo}
        increamentNextId={increamentNextId}
      />
      <ToDoList todos={todoState}></ToDoList>
    </div>
  );
};

export default App;
